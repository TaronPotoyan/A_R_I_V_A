import Product_description from '../components/Product_description';
import axios from 'axios';
import type { IPhone } from '../interface/Iphone';
import { useState, useEffect } from 'react';
import Message from '../components/Message';

const API: string = import.meta.env.VITE_API;
const KEY: string = import.meta.env.VITE_KEY;

export default function CreateProduct() {
  const [product, setProduct] = useState<IPhone>({
    id: null,
    _id: null,
    model: '',
    yearOfAnnouncement: '',
    os: '',
    screenType: '',
    screenResolution: '',
    frontCamera: '',
    mainCamera: '',
    ram: '',
    storage: '',
    chargingPortType: '',
    weight: '',
    shortDescription: '',
    length: '',
    image: '',
    value: 0,
    type: '',
    createdAt: undefined,
    updatedAt: undefined,
  });

  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' | 'info' | '' }>({
    text: '',
    type: 'info',
  });

  const handleChange = (field: keyof IPhone, value: string | number) => {
    setProduct({ ...product, [field]: value });
  };

  const handleSave = () => {
    axios
      .post(`${API}/phones`, { ...product, KEY })
      .then(() => {
        setMsg({ text: 'Product created successfully!', type: 'success' });
      })
      .catch(() => {
        setMsg({ text: 'Failed to create product', type: 'error' });
      });
  };

  const closeMsg = () => setMsg({ text: '', type: '' });

  useEffect(() => {
    if (msg.text) {
      const timer = setTimeout(closeMsg, 4000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  return (
    <>
      <Message msg={msg} closeMsg={closeMsg} />

      <Product_description
        product={product}
        setProduct={setProduct}
        handleChange={handleChange}
        handleSave={handleSave}
        closeMsg={closeMsg}
      />
    </>
  );
}
