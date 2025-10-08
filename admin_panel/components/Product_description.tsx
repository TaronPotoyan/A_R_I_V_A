import type { IProductDescriptionProps } from '../interface/IProductDescriptor';
import Message from './Message';

export default function Product_description({
  product,
  handleSave,
  handleChange,
  candelete,
  handleDelete,
}: IProductDescriptionProps) {
  const fallbackImage: string =
    'https://t4.ftcdn.net/jpg/03/12/57/97/360_F_312579728_JztO9YzcpOwnjuPpnh7i3pxfH1HDbX2l.jpg';

  return (
    <div className="product-admin">
      <div className="product-admin__image">
        <picture>
          <source srcSet={product?.image || fallbackImage} type="image/jpeg" />
          <img src={fallbackImage} alt={product?.model || 'Product Image'} />
        </picture>
      </div>

      <div className="product-admin__form">
        <label>
          URL Image
          <input
            type="text"
            value={product?.image}
            onChange={(e) => handleChange('image', e.target.value)}
          />
        </label>

        <label>
          Model:
          <input
            type="text"
            value={product?.model}
            onChange={(e) => handleChange('model', e.target.value)}
          />
        </label>

        <label>
          Short Description:
          <textarea
            value={product?.shortDescription}
            onChange={(e) => handleChange('shortDescription', e.target.value)}
          />
        </label>

        <label>
          Type:
          <input
            type="text"
            value={product?.type}
            onChange={(e) => handleChange('type', e.target.value)}
          />
        </label>

        <label>
          OS:
          <input
            type="text"
            value={product?.os}
            onChange={(e) => handleChange('os', e.target.value)}
          />
        </label>

        <label>
          RAM:
          <input
            type="text"
            value={product?.ram}
            onChange={(e) => handleChange('ram', e.target.value)}
          />
        </label>

        <label>
          Storage:
          <input
            type="text"
            value={product?.storage}
            onChange={(e) => handleChange('storage', e.target.value)}
          />
        </label>

        <label>
          Screen:
          <input
            type="text"
            value={`${product?.screenType}, ${product?.screenResolution}`}
            onChange={(e) => {
              const [type, resolution] = e.target.value.split(',');
              handleChange('screenType', type?.trim() || '');
              handleChange('screenResolution', resolution?.trim() || '');
            }}
          />
        </label>

        <label>
          Main Camera:
          <input
            type="text"
            value={product?.mainCamera}
            onChange={(e) => handleChange('mainCamera', e.target.value)}
          />
        </label>

        <label>
          Front Camera:
          <input
            type="text"
            value={product?.frontCamera}
            onChange={(e) => handleChange('frontCamera', e.target.value)}
          />
        </label>

        <label>
          Charging Port:
          <input
            type="text"
            value={product?.chargingPortType}
            onChange={(e) => handleChange('chargingPortType', e.target.value)}
          />
        </label>

        <label>
          Length:
          <input
            type="text"
            value={product?.length}
            onChange={(e) => handleChange('length', e.target.value)}
          />
        </label>

        <label>
          Weight:
          <input
            type="text"
            value={product?.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
          />
        </label>

        <label>
          Year of Announcement:
          <input
            type="text"
            value={product?.yearOfAnnouncement}
            onChange={(e) => handleChange('yearOfAnnouncement', e.target.value)}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            value={product?.value}
            onChange={(e) => handleChange('value', Number(e.target.value))}
          />
        </label>
        <div className="btn__container">
          <button onClick={handleSave} className="btn">
            Save Changes
          </button>
          {!!candelete && (
            <button onClick={handleDelete} className="btn">
              Delte Product
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
