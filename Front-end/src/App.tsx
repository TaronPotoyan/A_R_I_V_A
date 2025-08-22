import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from '../components/Header';

const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/Login'));
const Basket = lazy(() => import('../pages/basket'));

export default function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/basket" element={<Basket />} />
                </Routes>
            </Suspense>
        </>
    );
}
