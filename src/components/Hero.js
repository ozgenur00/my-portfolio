import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();

        const intervals = [1000, 2000, 2000]; 
        let timeoutIds = [];

        intervals.forEach((interval, index) => {
            const timeoutId = setTimeout(() => {
                setStep((prev) => prev + 1);
            }, intervals.slice(0, index + 1).reduce((a, b) => a + b, 0));
            timeoutIds.push(timeoutId);
        });

        return () => {
            timeoutIds.forEach(clearTimeout);
        };
    }, []);

    const splitText = (text) => {
        return text.split("").map((char, index) => (
            <span key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                {char}
            </span>
        ));
    };

    return (
        <section className="hero-section" id="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        {step >= 1 && (
                            <>
                                <h1>{splitText("Hello, I am Ozge")}</h1>
                                <div className="neon-line"></div>
                            </>
                        )}
                        {step >= 2 && (
                            <>
                                <p>{splitText("I am a Junior Web Developer.")}</p>
                            </>
                        )}
                    </div>
                    {step >= 3 && (
                        <div className="button-container">
                            <a href="#projects" className="button" data-aos="fade-up" data-aos-delay="0">Want to see my work?</a>

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Hero;