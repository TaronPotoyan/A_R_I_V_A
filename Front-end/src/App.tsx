import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import AboutUs from '../pages/About_us';

const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/Login'));
const Basket = lazy(() => import('../pages/basket'));
const Phones = lazy(() => import('../pages/Phons'));
const Accesories  = lazy(() => import('../pages/Accesories'));



export default function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path='/phones' element={<Phones/>} />
                    <Route path='/aceesories' element={<Accesories/>} />
                    <Route path='AboutUs' element={<AboutUs/>} />
                </Routes>
            </Suspense>
        </>
    );
}
