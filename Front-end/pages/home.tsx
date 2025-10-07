import { useEffect, useState } from 'react';
import type { IPhone } from '../../Back-end/interfaces/phon';
import axios from 'axios';
import ProductCard from '../components/product';
import React from 'react';

const API = import.meta.env.VITE_SERVER_API;
export default function Home() {
    const [products, setProducts] = useState<IPhone[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get(API)
            .then((response) => {
                if (response.data.message) {
                    alert(response.data.message);
                    return;
                }
                setProducts(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const skeletonArray = Array.from({ length: 6 });

    return (
        <div className="container">
            {loading ? (
                <div className="product-grid">
                    {skeletonArray.map((_, index) => (
                        <div className="product-card skeleton" key={index}>
                            <div className="product-image-wrapper">
                                <div className="skeleton-image"></div>
                            </div>
                            <div className="card-content">
                                <div className="skeleton-text short"></div>
                                <div className="skeleton-text long"></div>
                                <div className="skeleton-button"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : products.length === 0 ? (
                <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>
                    No products found
                </h2>
            ) : (
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard
                            product={product}
                            key={product._id}
                            brand={''}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
