import { useEffect, useState } from 'react';
import Card from '../components/product_card';
import type { IPhone } from '../interface/Iphone';

export default function Phones() {
  const [phones, setPhones] = useState<IPhone[]>([]);

  useEffect(() => {
    const phones: IPhone[] | null = JSON.parse(localStorage.getItem('A_R_I_V_A') || 'null');
    if (phones === null) {
      setPhones([]);
      return;
    }
    console.log(phones);

    setPhones(phones);
    return;
  }, []);

  return (
    <>
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
    </>
  );
}
