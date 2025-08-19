import type { IProduct } from '../interfaces/product_card';

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
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
            <button className="buy-button">BUY</button>
        </div>
    );
}
