import { useEffect, useState } from 'react';
import Card from '../components/product_card';
import axios from 'axios';
import Fallback from '../components/Fallback';

const API_accessories = `${import.meta.env.VITE_API}/aceesories`;

export default function Accessories() {
  const [accessories, setAccessories] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(API_accessories)
      .then(({ data }) => {
        setAccessories(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="phone-grid">
      {Array.isArray(accessories) && accessories.length > 0 ? (
        accessories.map((item) => (
          <Card
            key={item._id ?? Math.random()}
            id={item._id ?? ''}
            img={item.image ?? 'https://via.placeholder.com/150'}
            title={item.brand ?? 'Unknown Brand'}
            description={item.description ?? 'No description available'}
            footer={item.value !== undefined ? `Price: $${item.value}` : 'Price not available'}
          />
        ))
      ) : (
        <Fallback />
      )}
    </div>
  );
}
