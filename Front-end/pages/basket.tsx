import { useEffect, useState } from 'react';
import BasketProduct from '../components/productforbuy';
import axios from 'axios';
import React from 'react';

const API = import.meta.env.VITE_SERVER_API;

interface BasketItem {
    _id: string;
    item: {
        _id: string;
        model?: string;
        brand?: string;
        image?: string;
        value?: number;
        type: 'Phone' | 'Accessory';
    };
    itemType: 'Phone' | 'Accessory';
    quantity: number;
}

export default function Basket() {
    const [products, setProducts] = useState<BasketItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const fetchBasket = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user') || '{}');
                if (!user._id) return;
                setUserId(user._id);

                const res = await axios.post(`${API}/user/basket/get`, {
                    userId: user._id,
                });
                const basket = Array.isArray(res.data?.basket)
                    ? res.data.basket.map((item: any) => ({
                          ...item,
                          item: {
                              ...item.item,
                              type: item.item.type || item.itemType,
                          },
                      }))
                    : [];
                setProducts(basket);
            } catch (err) {
                console.error('Error fetching basket:', err);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBasket();
    }, []);

    const handleRemove = async (userId: string, productId: string) => {
        try {
            setProducts((prev) => prev.filter((p) => p.item._id !== productId));
            const { data } = await axios.post(`${API}/user/basket/remove`, {
                userId,
                productId,
            });
            setProducts(data.basket || []);
        } catch (err) {
            console.error('Error removing product:', err);
        }
    };

    const handleBuy = async (userId: string, productId: string) => {
        try {
            await axios.post(`${API}/user/basket/buy`, { userId, productId });
            setProducts((prev) => prev.filter((p) => p.item._id !== productId));
            alert('Purchase successful ✅');
        } catch (err) {
            console.error('Error buying product:', err);
            alert('Purchase failed ❌');
        }
    };

    if (loading) {
        return (
            <div className="basket-spinner-wrapper">
                <div className="basket-spinner"></div>
            </div>
        );
    }

    return (
        <div className="basket-container">
            {products?.length === 0 ? (
                <h3 className="basket-empty">Empty Basket 🛒</h3>
            ) : (
                <div className="basket-grid">
                    {products.map((product) => (
                        <BasketProduct
                            key={product._id}
                            product={{
                                _id: product._id,
                                itemType: product.itemType,
                                item: {
                                    ...product.item,
                                    model: product.item.model ?? '',
                                    image: product.item.image ?? '',
                                    brand: product.item.brand ?? '',
                                    value: product.item.value ?? 0,
                                },
                            }}
                            userId={userId}
                            onRemove={(uid, pid) => {
                                void handleRemove(uid, pid);
                            }}
                            onBuy={(uid, pid) => {
                                void handleBuy(uid, pid);
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
