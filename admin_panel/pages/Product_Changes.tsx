import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IPhone } from '../interface/Iphone';
import axios from 'axios';
import Message from '../components/Message';
import Product_description from '../components/Product_description';
import { Check_Object_Keys } from '../util/Checker_Object';
import Fallback from '../components/Fallback';

const API: string = import.meta.env.VITE_API;
const KEY: string = import.meta.env.VITE_KEY;

export default function Product_Changes() {
  const { id } = useParams();
  const [product, setProduct] = useState<IPhone | null>(null);
  const [msg, setMsg] = useState<{ text: string; type: 'success' | 'error' | 'info' | '' }>({
    text: '',
    type: '',
  });
  const [deleteP, setDeleteP] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${API}/phones/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => {
        setMsg({ text: 'Failed to fetch data', type: 'error' });
      });
  }, [id]);

  const handleChange = (field: keyof IPhone, value: string | number) => {
    if (product) setProduct({ ...product, [field]: value });
  };

  const handleSave = () => {
    if (!product) return;
    console.log(product);
    const isComplete = Check_Object_Keys(Object.keys(product), product);

    if (!isComplete) {
      setMsg({ text: 'Please fill in all required fields!', type: 'error' });
      return;
    }

    axios
      .patch(`${API}/phones/${id}`, { ...product, KEY })
      .then(() => {
        setMsg({ text: 'Product updated successfully! ', type: 'success' });
      })
      .catch(() => {
        setMsg({ text: 'Failed to update product', type: 'error' });
      });
  };

  const handleDelete = (): void => {
    if (!product?._id) return;

    axios
      .delete(`${API}/phones/${product._id}`, { data: { KEY } })
      .then((res) => {
        setDeleteP(false);
        setMsg({ text: 'Product deleted successfully!', type: 'success' });
        setProduct(null);
      })
      .catch((err) => {
        console.error(err);
        setMsg({ text: 'Failed to delete product', type: 'error' });
      });
  };
  const closeMsg = () => setMsg({ text: '', type: '' });

  useEffect(() => {
    if (msg.text) {
      const timer = setTimeout(() => closeMsg(), 4000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  if (!product) return <Fallback />;

  return (
    <>
      <Message msg={msg} closeMsg={closeMsg} />

      <Product_description
        product={product}
        handleChange={handleChange}
        handleSave={handleSave}
        closeMsg={closeMsg}
        candelete={deleteP}
        handleDelete={handleDelete}
      />
    </>
  );
}
