import type { CardProps } from '../interface/ICard';

export default function Card({
  id,
  img,
  title,
  description,
  footer,
}: CardProps) {
  return (
    <div className="card" id={id}>
      <div className="card__inner">
        {/* FRONT */}
        <div className="card__front">
          <img src={img} alt={title} className="card__img" />
          <div className="card__content">
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{description}</p>
            {footer && <div className="card__footer">{footer}</div>}
          </div>
        </div>

        {/* BACK */}
        <div className="card__back">
          <div className="card__back-content">
            <h3 className="card__title">{title}</h3>
            <button className="btn">Do changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
