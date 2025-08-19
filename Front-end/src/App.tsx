import { Routes, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Home from '../pages/home';
import Header from '../components/Header';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Register />} />
            </Routes>
        </>
    );
}
