'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BASE_SNIPPETS = [
    { code: "01100010 01101001 01101110 01100001 01110010 01111001", color: "#6272a4" },
    { code: "const dream = true;", color: "#ff79c6" },
];

const SECTIONS = {
    hero: [
        { code: "System.init({ mode: 'HACKER' });", color: "#50fa7b" },
        { code: "Connection established...", color: "#8be9fd" },
        { code: "import { Consciousness } from 'mind';", color: "#ff79c6" }
    ],
    about: [
        { code: "<Story mode='abridged' />", color: "#ffb86c" },
        { code: "skills.push('Creativity');", color: "#bd93f9" },
        { code: "// Reading user profile...", color: "#6272a4" }
    ],
    skills: [
        { code: "npm install knowledge --save", color: "#50fa7b" },
        { code: "while(learning) { grow(); }", color: "#ff5555" },
        { code: "stack.map(tech => tech.mastery++);", color: "#8be9fd" }
    ],
    experience: [
        { code: "SELECT * FROM history ORDER BY date DESC;", color: "#f1fa8c" },
        { code: "console.log(achievements);", color: "#ff79c6" },
        { code: "git merge career-growth", color: "#ff5555" }
    ],
    projects: [
        { code: "git commit -m 'Initial commit'", color: "#50fa7b" },
        { code: "DEPLOYING TO PRODUCTION...", color: "#ff5555" },
        { code: "Error: Success overflow", color: "#ffb86c" }
    ]
};

const HighlightedCode = ({ text, color }) => (
    <span style={{ color }}>{text}</span>
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
            const items = containerRef.current.querySelectorAll('.floating-code');

            items.forEach((item, i) => {
                const speed = (i % 3) + 1;
                const xPos = (i * 15) % 100;
                const yStart = (i * 10) % 100; // Spread vertically initially

                gsap.set(item, {
                    x: `${xPos}vw`,
                    y: `${yStart}vh`,
                    opacity: 0.15,
                });

                // Scroll-driven movement (Scrub)
                gsap.to(item, {
                    y: `+=${100 * speed}vh`, // Move down significantly on scroll
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1 // Smooth scrubbing linked to scrollbar
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [activeSnippets]);

    return (
        <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => {
                const snippet = activeSnippets[i % activeSnippets.length];
                return (
                    <div key={i} className="floating-code absolute text-xs md:text-sm font-mono whitespace-nowrap transition-all duration-500">
                        <HighlightedCode text={snippet.code} color={snippet.color} />
                    </div>
                )
            })}
        </div>
    );
}
