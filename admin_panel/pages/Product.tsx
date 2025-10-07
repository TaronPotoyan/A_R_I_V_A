import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IPhone } from '../interface/Iphone';
import axios from 'axios';

const API: string = import.meta.env.VITE_API;

export default function ProductAdmin() {
  const { id } = useParams();
  const [product, setProduct] = useState<IPhone | null>(null);
  const [ErrorMsg, setErrorMsg] = useState<String>('');

  useEffect(() => {
    axios
      .get(`${API}/phones/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => {
        setErrorMsg('Failed to fetch Data');
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleChange = (field: keyof IPhone, value: string | number) => {
    setProduct({ ...product, [field]: value });
  };

  const handleSave = () => {
    axios
      .put(`${API}/phones/${id}`, product)
      .then(() => alert('Product updated successfully'))
      .catch(() => alert('Failed to update product'));
  };
  const closeError = () => {
    setErrorMsg('');
  }
  return (
    <>
      {!!ErrorMsg  && (
      <div className="Error">
        <span className="Error__msg">{ErrorMsg}</span>
        <button className="Error__close" onClick={closeError}>
          &times;
        </button>
      </div>
      )}
      <div className="product-admin">
        <div className="product-admin__image">
          <img src={product.image} alt={product.model} />
        </div>

        <div className="product-admin__form">
           <label >
                URL Image 
                <input 
                type="text"
                value={product.image}
                onChange={(e) => handleChange('image',e.target.value)} 
                />
            </label> 
          <label>
            Model:
            <input
              type="text"
              value={product.model}
              onChange={(e) => handleChange('model', e.target.value)}
            />
          </label>

          <label>
            Short Description:
            <textarea
              value={product.shortDescription}
              onChange={(e) => handleChange('shortDescription', e.target.value)}
            />
          </label>

          <label>
            Type:
            <input
              type="text"
              value={product.type}
              onChange={(e) => handleChange('type', e.target.value)}
            />
          </label>

          <label>
            OS:
            <input
              type="text"
              value={product.os}
              onChange={(e) => handleChange('os', e.target.value)}
            />
          </label>

          <label>
            RAM:
            <input
              type="text"
              value={product.ram}
              onChange={(e) => handleChange('ram', e.target.value)}
            />
          </label>

          <label>
            Storage:
            <input
              type="text"
              value={product.storage}
              onChange={(e) => handleChange('storage', e.target.value)}
            />
          </label>

          <label>
            Screen:
            <input
              type="text"
              value={`${product.screenType}, ${product.screenResolution}`}
              onChange={(e) => {
                const [type, resolution] = e.target.value.split(',');
                handleChange('screenType', type.trim());
                handleChange('screenResolution', resolution?.trim() || '');
              }}
            />
          </label>

          <label>
            Main Camera:
            <input
              type="text"
              value={product.mainCamera}
              onChange={(e) => handleChange('mainCamera', e.target.value)}
            />
          </label>

          <label>
            Front Camera:
            <input
              type="text"
              value={product.frontCamera}
              onChange={(e) => handleChange('frontCamera', e.target.value)}
            />
          </label>

          <label>
            Charging Port:
            <input
              type="text"
              value={product.chargingPortType}
              onChange={(e) => handleChange('chargingPortType', e.target.value)}
            />
          </label>

          <label>
            Length:
            <input
              type="text"
              value={product.length}
              onChange={(e) => handleChange('length', e.target.value)}
            />
          </label>

          <label>
            Weight:
            <input
              type="text"
              value={product.weight}
              onChange={(e) => handleChange('weight', e.target.value)}
            />
          </label>

          <label>
            Year of Announcement:
            <input
              type="text"
              value={product.yearOfAnnouncement}
              onChange={(e) => handleChange('yearOfAnnouncement', e.target.value)}
            />
          </label>

          <label>
            Price:
            <input
              type="number"
              value={product.value}
              onChange={(e) => handleChange('value', Number(e.target.value))}
            />
          </label>

          <button onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </>
  );
}
