import { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '../components/Header';
import Product from '../pages/Product';

const Home = lazy(() => import('../pages/Home'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Product />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
