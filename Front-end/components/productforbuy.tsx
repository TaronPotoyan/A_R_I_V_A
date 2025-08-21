import type { IProduct } from '../interfaces/product_card';

interface PRODUCTBUYProps {
    product: {
        item: IProduct & { type?: 'Phone' | 'Accessory'; brand?: string };
        itemType: 'Phone' | 'Accessory';
        _id: string;
    };
}

export default function PRODUCTBUY({ product }: PRODUCTBUYProps) {
    const handleRemove = () => {
        // TODO: Implement remove logic
    };

    const handleBuy = () => {
        // TODO: Implement buy logic
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
