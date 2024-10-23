import React, { useState, useEffect } from 'react';
import './scrollToTop.css'; // Estilos para o botão

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <div className="circle">
                <span className="arrow">&#8593;</span> {/* seta para cima */}
            </div>
        </div>
    );
};

export default ScrollToTop;