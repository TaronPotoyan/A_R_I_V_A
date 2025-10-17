import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/product_card';
import type { IPhone } from '../interface/Iphone';

const API: string = import.meta.env.VITE_API;

const PhoneApi = API + '/phones';

export default function Home() {
  const [phones, setPhones] = useState<IPhone[]>([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        let phone: IPhone[] = JSON.parse(localStorage.getItem('A_R_I_V_A') || '[]');

        let ClientLen: number = phone.length;
        const response = await axios.get(`${PhoneApi}/len/len`);
        const ServerLen: number = response.data.len;
        console.log(ServerLen, ClientLen);
        if (ClientLen === ServerLen) {
          setPhones(phone);
          return;
        }

        const { data } = await axios.get(`${PhoneApi}`);
        localStorage.setItem('A_R_I_V_A', JSON.stringify(data.data));
        setPhones(data.data);
      } catch (e) {
        console.error(`Error fetching phones: ${e}`);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className="phone-grid">
      {phones.map((phone) => (
        <Card
          key={phone._id ?? phone.id?.toString()}
          id={phone._id?.toString() || ''}
          img={phone.image}
          title={phone.model}
          description={phone.shortDescription}
        />
      ))}
    </div>
  );
}
