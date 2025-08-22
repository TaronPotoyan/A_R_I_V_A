import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import AboutUs from '../pages/About_us';
import { CircularProgress, Box } from '@mui/material';

const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/Login'));
const Basket = lazy(() => import('../pages/basket'));
const Phones = lazy(() => import('../pages/Phons'));
const Accesories = lazy(() => import('../pages/Accesories'));

export default function App() {
    return (
        <>
            <Header />
            <Suspense
                fallback={
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '80vh',
                        }}
                    >
                        <CircularProgress color="secondary" />
                    </Box>
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/basket" element={<Basket />} />
                    <Route path="/phones" element={<Phones />} />
                    <Route path="/aceesories" element={<Accesories />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                </Routes>
            </Suspense>
        </>
    );
}
