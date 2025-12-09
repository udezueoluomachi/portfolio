'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const words = textRef.current.querySelectorAll('span');

            gsap.from(words, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: 1,
                },
                opacity: 0.1,
                stagger: 0.1,
                duration: 1
            });
        });

        return () => ctx.revert();
    }, []);

    const content = "I build high-impact, reliable systems that drive efficiency and growth. From AI-assisted platforms processing hundreds of proposals to marketplaces serving university communities, I architect solutions that matter.";

    return (
        <section className="py-32 container">
            <div className="max-w-4xl">
                <p ref={textRef} className="text-3xl md:text-5xl leading-tight font-medium">
                    {content.split(' ').map((word, i) => (
                        <span key={i} className="inline-block mr-3">{word}</span>
                    ))}
                </p>
            </div>
        </section>
    );
}
