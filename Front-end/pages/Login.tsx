import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_SERVER_API;

export default function Login() {
    const navigate = useNavigate();

    const handleGoogleLogin = async (credentialResponse: any) => {
        try {
            const res = await axios.post(`${API}/user/google-login`, {
                token: credentialResponse.credential,
            });

            const user = res.data.user;

            localStorage.setItem('user', JSON.stringify(user));

            alert(`Welcome ${user.name || user.email}`);

            navigate('/');
        } catch (err: any) {
            console.error(err);
            alert(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Welcome Back</h2>
                <p className="login-subtitle">Sign in with Google</p>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '2rem',
                    }}
                >
                    <GoogleLogin
                        onSuccess={handleGoogleLogin}
                        onError={() => alert('Google login failed')}
                    />
                </div>
            </div>
        </div>
    );
}
