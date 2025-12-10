'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE_SNIPPETS = [
    { code: "01100010 01101001 01101110 01100001 01110010 01111001", color: "#6272a4" },
    { code: "const dream = true;", color: "#ff79c6" },
    { code: "e^{i\\pi} + 1 = 0", color: "#f1fa8c" }, // Euler's Identity
    { code: "\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}", color: "#8be9fd" } // Gaussian Integral
];

const SECTIONS = {
    hero: [
        { code: "System.init({ mode: 'GOD_MODE' });", color: "#50fa7b" },
        { code: "Connection established...", color: "#8be9fd" },
        { code: "import { Consciousness } from 'universe';", color: "#ff79c6" },
        { code: "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!} (x-a)^n", color: "#f1fa8c" } // Taylor Series
    ],
    about: [
        { code: "<Story mode='abridged' />", color: "#ffb86c" },
        { code: "NeuralNet.train(data, epochs=1000);", color: "#bd93f9" },
        { code: "∂L/∂w = (y - ŷ) * x", color: "#6272a4" } // Gradient Descent
    ],
    skills: [
        { code: "npm install knowledge --save", color: "#50fa7b" },
        { code: "while(learning) { grow(); }", color: "#ff5555" },
        { code: "Tensor<Float32>([1024, 1024])", color: "#8be9fd" }
    ],
    experience: [
        { code: "SELECT * FROM history ORDER BY date DESC;", color: "#f1fa8c" },
        { code: "Model.evaluate(metrics=['accuracy']);", color: "#ff79c6" },
        { code: "git merge career-growth", color: "#ff5555" }
    ],
    projects: [
        { code: "git commit -m 'Initial commit'", color: "#50fa7b" },
        { code: "0xUNIVERSE_KEY", color: "#ff5555" },
        { code: "h = 6.62607015 × 10^{-34}", color: "#ffb86c" } // Planck Constant
    ]
};

const HighlightedCode = ({ text, color }) => (
    <span style={{ color, textShadow: `0 0 5px ${color}40` }}>{text}</span>
);

export default function ParallaxBackground() {
    const containerRef = useRef(null);
    const [activeSnippets, setActiveSnippets] = useState([...BASE_SNIPPETS, ...SECTIONS.hero]);

    useEffect(() => {
        // Scroll triggers to change content
        const triggers = [
            { id: 'hero', start: 0, end: 1000 },
            { id: 'about', start: 1000, end: 2000 },
            { id: 'skills', start: 2000, end: 4000 },
            { id: 'experience', start: 4000, end: 5500 },
            { id: 'projects', start: 5500, end: 99999 }
        ];

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const currentSection = triggers.find(t => scrollY >= t.start && scrollY < t.end);

            if (currentSection) {
                setActiveSnippets(prev => {
                    const newSnippets = [...BASE_SNIPPETS, ...SECTIONS[currentSection.id] || SECTIONS.hero];
                    if (JSON.stringify(prev) === JSON.stringify(newSnippets)) return prev;
                    return newSnippets;
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // CODE SNIPPETS ANIMATION
            const items = containerRef.current.querySelectorAll('.floating-code');
            items.forEach((item, i) => {
                const speed = (i % 3) + 1;
                const xPos = (i * 15) % 90;
                gsap.set(item, {
                    x: `${xPos}vw`,
                    y: `${(i * 10) % 100}vh`,
                    opacity: 0.1,
                    scale: 0.8 + Math.random() * 0.4
                });

                gsap.to(item, {
                    y: `+=${100 * speed}vh`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            });

            // UNIVERSE PARTICLES ANIMATION
            const particles = containerRef.current.querySelectorAll('.particle');
            particles.forEach((p, i) => {
                const speed = Math.random() * 0.5 + 0.2;
                gsap.set(p, {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    opacity: Math.random() * 0.5 + 0.1,
                    scale: Math.random() * 0.5 + 0.5
                });

                // Animate particles independently from scroll for "floating in space" feel
                gsap.to(p, {
                    y: `-=${window.innerHeight}`,
                    duration: 20 + Math.random() * 20,
                    repeat: -1,
                    ease: "none"
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, [activeSnippets]);

    return (
        <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">

            {/* 1. Universe Particles Layer */}
            {Array.from({ length: 30 }).map((_, i) => (
                <div
                    key={`p-${i}`}
                    className="particle absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                />
            ))}

            {/* 2. Floating Code/Math Layer */}
            {Array.from({ length: 20 }).map((_, i) => {
                const snippet = activeSnippets[i % activeSnippets.length];
                return (
                    <div key={i} className="floating-code absolute text-xs md:text-sm font-mono whitespace-nowrap transition-all duration-500">
                        <HighlightedCode text={snippet?.code || ''} color={snippet?.color || '#fff'} />
                    </div>
                )
            })}
        </div>
    );
}
