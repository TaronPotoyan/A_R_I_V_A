import { useEffect } from 'react';

export default function AboutUs() {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((el, i) => {
            (el as HTMLElement).classList.add(`fade-delay-${i}`);
        });
    }, []);

    return (
        <div
            className="about-us-page"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '2rem',
                fontFamily: 'Arial, sans-serif',
                color: '#e754a1',
                textAlign: 'center',
                fontSize: '1.2rem',
                lineHeight: '1.6',
            }}
        >
            <h1 className="fade-in" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                📱 About ARIVA Mobile
            </h1>
            <p className="fade-in" style={{ fontSize: '1.5rem', maxWidth: '800px', marginBottom: '2rem' }}>
                ARIVA Mobile is a mobile and accessories retailer, established in 2025.  
                We proudly serve customers in Armenia, Yerevan. 🇦🇲✨
            </p>
            <h2 className="fade-in" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                📞 Contact Information
            </h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="fade-in" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    <strong>Phone:</strong> +374 XX XXX XXX 📱
                </li>
                <li className="fade-in" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    <strong>Email:</strong> contact@ariva.am 📧
                </li>
                <li className="fade-in" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    <strong>Address:</strong> Yerevan, Armenia 🏙️
                </li>
            </ul>

            <style>
                {`
                    .fade-in {
                        opacity: 0;
                        transform: translateY(20px);
                        animation: fadeUp 1s ease forwards;
                    }

                    @keyframes fadeUp {
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .fade-delay-0 { animation-delay: 0s; }
                    .fade-delay-1 { animation-delay: 0.3s; }
                    .fade-delay-2 { animation-delay: 0.6s; }
                    .fade-delay-3 { animation-delay: 0.9s; }
                    .fade-delay-4 { animation-delay: 1.2s; }
                    .fade-delay-5 { animation-delay: 1.5s; }
                `}
            </style>
        </div>
    );
}
