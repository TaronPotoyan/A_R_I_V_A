import { useEffect, useState } from 'react';
import type { IProduct } from '../interfaces/product_card';
import PRODUCTBUY from '../components/productforbuy';
import axios from 'axios';

const API = import.meta.env.VITE_SERVER_API;

export default function Basket() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBasket = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user') || '{}');
                const userId = user._id;
                if (!userId) return;

                const res = await axios.post(`${API}/user/basket/get`, {
                    userId,
                });

                const items = res.data.basket.map((item: any) => ({
                    ...item,
                    name: item.model || item.brand || 'Unknown Product',
                }));

                setProducts(items);
            } catch (err) {
                console.error('Error fetching basket:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBasket();
    }, []);

    if (loading) return <h3>Loading...</h3>;

    return (
        <div className="home-container">
            {products.length === 0 ? (
                <h3 className="no-products">Empty Basket 🛒</h3>
            ) : (
                <div className="product-grid">
                    {products.map((product: IProduct) => (
                        <PRODUCTBUY key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
