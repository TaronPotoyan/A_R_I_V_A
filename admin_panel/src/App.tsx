import  { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from '../components/Header';


const Home = lazy(() => import('../pages/Home'));


const App = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
