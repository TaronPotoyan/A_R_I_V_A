import { useCallback, useState } from 'react';
import type { IProduct } from '../interfaces/product_card';

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    const storedUser = localStorage.getItem('ARIVA');
    const [isLoggedIn] = useState(storedUser ? JSON.parse(storedUser)?.user : false);
    const [showPopup, setShowPopup] = useState(false);

    const handlerBuy = useCallback(() => {
        if (!isLoggedIn) {
            setShowPopup(true);
        } else {
            // handle buy logic
            console.log('Buying product:', product.model);
            
        }
    }, [isLoggedIn, product]);

    const closePopup = () => setShowPopup(false);

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img
                    src={product.image}
                    alt={product.model}
                    className="product-image"
                />
            </div>
            <h3 className="product-title">{product.model}</h3>
            <p className="product-price">{product.value} AMD</p>
            <button className="buy-button" onClick={handlerBuy}>BUY</button>

            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={e => e.stopPropagation()}>
                        <h3>⚠️ Login Required</h3>
                        <p>You need to log in to buy this product.</p>
                        <button onClick={closePopup} className="popup-close">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
