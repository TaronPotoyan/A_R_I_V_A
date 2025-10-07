import { useCallback } from 'react';
import type { CardProps } from '../interface/ICard';
import { useNavigate } from 'react-router-dom';

export default function Card({ id, img, title, description, footer }: CardProps) {
  const navigate = useNavigate();

  const DoChangeshandler = useCallback(() => {
    navigate(`/${id}`);
    return;
  }, []);

  return (
    <div className="card" id={id}>
      <div className="card__inner">
        <div className="card__front">
          <img src={img} alt={title} className="card__img" />
          <div className="card__content">
            <h3 className="card__title">{title}</h3>
            <p className="card__description">{description}</p>
            {footer && <div className="card__footer">{footer}</div>}
          </div>
        </div>

        <div className="card__back">
          <div className="card__back-content">
            <h3 className="card__title">{title}</h3>
            <button className="btn" onClick={DoChangeshandler}>
              Do changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
