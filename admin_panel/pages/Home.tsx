import { useState, useEffect } from "react";
import axios from "axios";
import Card from '../components/product_card';
import type { IPhone } from '../interface/Iphone';

const API: string =  import.meta.env.VITE_API;

const PhoneApi = API + '/phones';

export default function Home() {
  const [phones, setPhones] = useState<IPhone[]>([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response : any = await axios.get<IPhone[]>(PhoneApi);
        console.log(response.data.data);

        const phon : IPhone[] = response.data?.data ?? [];
       
        setPhones(phon);

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
