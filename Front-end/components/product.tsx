import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { IProduct } from '../interfaces/product_card';
import axios from 'axios';

const API = import.meta.env.VITE_SERVER_API;

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const isLoggedIn = !!storedUser._id;
    const [showPopup, setShowPopup] = useState(false);
    const navigator = useNavigate();

    const handlerBuy = useCallback(async () => {
        if (!isLoggedIn) {
            setShowPopup(true);
            return;
        }

        try {
            const type: 'Phone' | 'Accessory' = product.model
                ? 'Phone'
                : 'Accessory';

            await axios.post(`${API}/user/basket/set`, {
                userId: storedUser._id,
                productId: product._id,
                type,
            });

            alert('Product added to basket');
            navigator(`/Basket`);
        } catch (err) {
            console.error('Failed to add product to basket', err);
        }
    }, [isLoggedIn, product, storedUser._id, navigator]);

    const closePopup = () => setShowPopup(false);

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img
                    src={product.image}
                    alt={product.model || product.brand || 'Product Image'}
                    className="product-image"
                />
            </div>
            <h3 className="product-title">{product.model || product.brand}</h3>
            <p className="product-price">{product.value} AMD</p>
            <button
                className="buy-button"
                style={{ marginTop: '1rem' }}
                onClick={handlerBuy}
            >
                Add to Basket
            </button>

            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div
                        className="popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>⚠️ Login Required</h3>
                        <p>You need to log in to buy this product.</p>
                        <div className="popup-buttons">
                            <button
                                onClick={closePopup}
                                className="popup-close"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
