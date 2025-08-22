import axios from 'axios'
import { useEffect, useState } from 'react'
import type { IPhone } from '../../Back-end/interfaces/phon.ts'
import ProductCard from '../components/product.tsx'

const API = import.meta.env.VITE_SERVER_API

export default function Phones() {
  const [phons, setPhons] = useState<IPhone[]>([])

  useEffect(() => {
    axios.get(`${API}/phones`)
      .then((res) => {
        setPhons(res.data.data)
      })
      .catch((err) => {
        console.error('Failed to fetch phones:', err)
      })
  }, [])

  return (
      <><div className="container"> 
         <div className="product-grid">
            {phons.map((product) => (
                <ProductCard product={product} key={product._id} brand={''} />
                ))}
         </div>
      </div>
      </>
  )
}
