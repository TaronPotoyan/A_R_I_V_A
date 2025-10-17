import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Product from '../pages/Product_Changes';
import CreateProduct from '../pages/Create_product';
import Phones from '../pages/Phones';
import FallBack from '../components/Fallback';

const Home = lazy(() => import('../pages/Home'));
const Accessories = lazy(() => import('../pages/Accessories'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<FallBack />}>
        <Routes>
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/Phones" element={<Phones />} />
          <Route path="/Accessories" element={<Accessories />} />x
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
