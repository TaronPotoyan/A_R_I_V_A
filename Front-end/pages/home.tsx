import { useEffect, useState } from 'react';
import type { IPhone } from '../../Back-end/interfaces/phon';
import axios from 'axios';
import ProductCard from '../components/product';

const API = import.meta.env.VITE_SERVER_API;

export default function Home() {
    const [products, setProducts] = useState<IPhone[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(API)
            .then((response) => {
                if (response.data.message) {
                    alert(response.data.message);
                    return;
                }
                setProducts(response.data.data);
            })
            .catch((error) => console.error('Error fetching products:', error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="home-container">
            {loading ? (
                <div className="spinner-wrapper">
                    <div className="spinner"></div>
                </div>
            ) : products.length === 0 ? (
                <h2 className="no-products">No products found</h2>
            ) : (
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
