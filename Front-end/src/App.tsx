import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Home from '../pages/home';
import Header from '../components/Header';
import Login from '../pages/Login';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}
