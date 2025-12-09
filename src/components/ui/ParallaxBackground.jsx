'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CODE_SNIPPETS = [
    { code: "const matrix = new Float32Array(1024);", color: "#ff00ff" }, // Example color
    { code: "function decrypt(hash) { return atob(hash); }", color: "#00ff00" },
    { code: "import { Soul } from 'universe';", color: "#00ffff" },
    { code: "System.out.println('Hello World');", color: "#ffff00" },
    { code: "while(alive) { code(); }", color: "#ff0000" },
    { code: "01001000 01100101 01101100 01101100 01101111", color: "#888888" },
    { code: "git commit -m 'Initial commit'", color: "#00ff00" },
    { code: "npm install life@latest", color: "#ff00ff" },
    { code: "ERROR: 404 REALITY NOT FOUND", color: "#ff0000" },
    { code: "sudo rm -rf /problems", color: "#ffff00" },
    { code: "<div></div>", color: "#00ffff" },
    { code: "const dream = true;", color: "#ff00ff" }
];

// Helper to simulate syntax highlighting
const HighlightedCode = ({ text }) => {
    // Simple regex-based coloring
    const parts = text.split(/(\s+|[{}\(\)\[\];,])/);

    return (
        <span>
            {parts.map((part, i) => {
                let color = "#888"; // default comment/symbol

                if (["const", "var", "let", "function", "import", "from", "return", "new", "class", "if", "else", "while"].includes(part)) color = "#ff79c6"; // keyword (pink)
                else if (["true", "false", "null", "undefined"].includes(part)) color = "#bd93f9"; // boolean/null (purple)
                else if (part.match(/^[0-9]+$/)) color = "#bd93f9"; // number (purple)
                else if (part.match(/^'.*'$/) || part.match(/^".*"$/)) color = "#f1fa8c"; // string (yellow)
                else if (part.match(/^[A-Z][a-zA-Z0-9]*$/)) color = "#8be9fd"; // Class/Type (cyan)
                else if (part.match(/^[a-z][a-zA-Z0-9]*$/)) color = "#f8f8f2"; // variable/func (white)

                // Special case overrides for simplicity
                if (text.startsWith("ERROR")) color = "#ff5555";
                if (text.startsWith("0100")) color = "#6272a4"; // (dim)

                return <span key={i} style={{ color }}>{part}</span>
            })}
        </span>
    );
};


export default function ParallaxBackground() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = containerRef.current.querySelectorAll('.floating-code');

            items.forEach((item, i) => {
                const speed = (i % 5) + 1;
                const xPos = Math.random() * 100;
                const yStart = Math.random() * 100;

                gsap.set(item, {
                    x: `${xPos}vw`,
                    y: `${yStart}vh`,
                    opacity: Math.random() * 0.3 + 0.1, // Increased opacity slightly for visibility
                });

                gsap.to(item, {
                    y: `+=${100 * speed}`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            {[...CODE_SNIPPETS, ...CODE_SNIPPETS].map((snippet, i) => (
                <div key={i} className="floating-code absolute text-xs md:text-sm font-mono whitespace-nowrap">
                    <HighlightedCode text={snippet.code || snippet} />
                </div>
            ))}
        </div>
    );
}
