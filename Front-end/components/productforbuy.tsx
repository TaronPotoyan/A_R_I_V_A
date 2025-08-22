import type { IProduct } from '../interfaces/product_card';

interface BasketProductProps {
    product: {
        item: IProduct & {
            type?: 'Phone' | 'Accessory';
            brand?: string;
            image?: string;
            value?: number;
        };
        itemType: 'Phone' | 'Accessory';
        _id: string;
    };
    userId: string;
    onRemove?: (userId: string, productId: string) => void;
    onBuy?: (userId: string, productId: string) => void;
}

export default function BasketProduct({
    product,
    onRemove,
    onBuy,
    userId,
}: BasketProductProps) {
    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (onRemove) onRemove(userId, product._id);
    };

    const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (onBuy) onBuy(userId, product._id);
    };

    const item = product.item;
    const name = item.model || item.brand || 'Unknown Product';

    return (
        <div className="basket-card">
            <div className="basket-image-wrapper">
                <img
                    src={item.image || ''}
                    alt={name}
                    className="basket-image"
                />
            </div>
            <h3 className="basket-title">{name}</h3>
            <p className="basket-price">{item.value ?? 0} AMD</p>
            <div className="basket-buttons">
                <button className="basket-button" onClick={handleBuy}>
                    BUY
                </button>
                <button className="basket-button" onClick={handleRemove}>
                    Remove
                </button>
            </div>
        </div>
    );
}
