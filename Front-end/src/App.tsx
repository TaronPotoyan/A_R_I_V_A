import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Header from '../components/Header';
import Login from '../pages/Login';
import Basket from '../pages/basket';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Basket" element={<Basket />} />
            </Routes>
        </>
    );
}
