import axios from 'axios';
import type { IProduct } from '../interfaces/product_card';

const API: string = import.meta.env.VITE_SERVER_API;

interface PRODUCTBUYProps {
    product: {
        item: IProduct & { type?: 'Phone' | 'Accessory'; brand?: string };
        itemType: 'Phone' | 'Accessory';
        _id: string;
    };
    userId: string;
    onRemove?: (userId: string, productId: string) => void;
    onBuy?: (userId: string, productId: string) => void;
}

export default function PRODUCTBUY({ product, onRemove, onBuy, userId }: PRODUCTBUYProps) {
    
    const handleRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            if (onRemove) {
                onRemove(userId, product._id);
            }
            await axios.post(`${API}/user/basket/remove`, {
                userId,
                productId: product._id,
            });
        } catch (err) {
            console.error('Error removing product:', err);
        }
    };

    const handleBuy = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            if (onBuy) {
                onBuy(userId, product._id);
            }
            await axios.post(`${API}/user/basket/buy`, {
                userId,
                productId: product._id,
            });
            alert('Purchase successful ✅');
        } catch (err) {
            console.error('Error buying product:', err);
            alert('Purchase failed ❌');
        }
    };

    const item = product.item;
    const name = item.model || item.brand || 'Unknown Product';

    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img
                    src={item.image || ''}
                    alt={name}
                    className="product-image"
                />
            </div>
            <h3 className="product-title">{name}</h3>
            <p className="product-price">{item.value ?? 0} AMD</p>
            <div className="product-buttons">
                <button className="buy-button" onClick={handleBuy}>
                    BUY
                </button>
                <button className="buy-button" onClick={handleRemove}>
                    Remove
                </button>
            </div>
        </div>
    );
}
