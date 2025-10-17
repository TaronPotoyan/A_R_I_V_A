import Product_description from '../components/Product_description';
import axios from 'axios';
import type { IPhone } from '../interface/Iphone';
import { useState, useEffect } from 'react';
import Message from '../components/Message';
import { Check_Object_Keys } from '../util/Checker_Object';

const API: string = import.meta.env.VITE_API;
const KEY: string = import.meta.env.VITE_KEY;

export default function CreateProduct() {
  const [product, setProduct] = useState<IPhone>({
    model: '',
    yearOfAnnouncement: '',
    os: '',
    screenType: '',
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
  });

  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' | 'info' | '' }>({
    text: '',
    type: 'info',
  });

  const handleChange = (field: keyof IPhone, value: string | number) => {
    setProduct({ ...product, [field]: value });
  };

  const handleSave = () => {
    const isComplete = Check_Object_Keys(Object.keys(product), product);

    if (!isComplete) {
      setMsg({ text: 'Please fill in all required fields!', type: 'error' });
      return;
    }

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
