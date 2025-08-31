import React, { useEffect } from 'react';
import '../styles/about.css';

export default function AboutUs() {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach((el, i) => {
            (el as HTMLElement).classList.add(`fade-delay-${i}`);
        });
    }, []);

    return (
        <div className="about-us-page">
            <h1 className="fade-in">📱 About ARIVA Mobile</h1>
            <p className="fade-in">
                ARIVA Mobile is a mobile and accessories retailer, established
                in 2025. We proudly serve customers in Armenia, Yerevan. 🇦🇲✨
            </p>
            <h2 className="fade-in">📞 Contact Information</h2>
            <ul>
                <li className="fade-in">
                    <strong>Phone:</strong> +374 XX XXX XXX 📱
                </li>
                <li className="fade-in">
                    <strong>Email:</strong> contact@ariva.am 📧
                </li>
                <li className="fade-in">
                    <strong>Address:</strong> Yerevan, Armenia 🏙️
                </li>
            </ul>
        </div>
    );
}
