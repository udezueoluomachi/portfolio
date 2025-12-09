'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.scss';

gsap.registerPlugin(ScrollTrigger);

const CodeBlock = ({ code, className, speed = 1 }) => (
    <div className={`${styles.codeBlock} ${className}`} data-speed={speed}>
        <pre><code>{code}</code></pre>
    </div>
);

export default function Hero() {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect on mouse move
            const blocks = document.querySelectorAll(`.${styles.codeBlock}`);

            window.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;

                blocks.forEach(block => {
                    const speed = block.getAttribute('data-speed');
                    gsap.to(block, {
                        x: x * speed,
                        y: y * speed,
                        duration: 1,
                        ease: 'power2.out'
                    });
                });
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.hero} ref={container}>
            <div className="container h-full flex flex-col justify-center relative z-10">
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4">
                    OLUOMACHI<br />
                    <span className="text-dim">UDEZUE</span>
                </h1>
                <p className="text-xl md:text-2xl text-accent max-w-2xl">
                    FULL STACK SOFTWARE ENGINEER & AI RESEARCHER
                </p>
            </div>

            {/* Floating Code Blocks */}
            <CodeBlock
                code={`const engineer = {\n  name: "Oluomachi",\n  role: "Architect"\n};`}
                className="absolute top-20 right-20 opacity-50"
                speed={2}
            />
            <CodeBlock
                code={`<System status="online" />`}
                className="absolute bottom-40 left-10 opacity-30"
                speed={-1.5}
            />
            <CodeBlock
                code={`import { Future } from 'reality';`}
                className="absolute top-1/2 right-1/4 opacity-40"
                speed={1}
            />
        </section>
    );
}
