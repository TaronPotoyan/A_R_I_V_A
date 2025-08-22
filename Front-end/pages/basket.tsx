import { useEffect, useState } from 'react';
import type { IProduct } from '../interfaces/product_card';
import PRODUCTBUY from '../components/productforbuy';
import axios from 'axios';

const API = import.meta.env.VITE_SERVER_API;

interface BasketItem {
    _id: string;
    item: {
        _id: string;
        model?: string;
        brand?: string;
        // other product properties
    };
    itemType: string;
    quantity: number;
}

export default function Basket() {
    const [products, setProducts] = useState<BasketItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string>("");

   useEffect(() => {
    const fetchBasket = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            if (!user._id) return;
            setUserId(user._id);

            const res = await axios.post(`${API}/user/basket/get`, { userId: user._id });

            const basket = Array.isArray(res.data?.basket) ? res.data.basket : [];

            const items = basket.map((item: any) => ({
                ...item,
                name: item.item?.model || item.item?.brand || 'Unknown Product',
            }));

            setProducts(items);
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
        console.log(userId+ '\n' + productId)
         const {data} =  await axios.post(`${API}/user/basket/remove`, { 
            userId,
            productId,
        });
        setProducts(data.basket)
        // console.log(res)
    } catch (err) {
        console.error('Error removing product:', err);
        const res = await axios.post(`${API}/user/basket/get`, { userId });
        setProducts(res.data.basket);
    }
};

    const handleBuy = async (userId: string, productId: string) => {
        try {
            await axios.post(`${API}/user/basket/buy`, { userId, productId });

            // Filter by the product's ID (item._id) not the basket item's ID
            setProducts((prev) => prev.filter((p) => p.item._id !== productId));
            alert('Purchase successful ✅');
        } catch (err) {
            console.error('Error buying product:', err);
            alert('Purchase failed ❌');
        }
    };

    if (loading) return <h3>Loading...</h3>;

    return (
        <div className="home-container">
            {products?.length === 0 ? (
                <h3 className="no-products">Empty Basket 🛒</h3>
            ) : (
                <div className="product-grid">
                    {products.map((product) => (
                        <PRODUCTBUY
                            key={product._id} 
                            product={product}
                            userId={userId}
                            onRemove={handleRemove}
                            onBuy={handleBuy}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}