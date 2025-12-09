'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/data/skills';
import styles from './Skills.module.scss';

export default function Skills() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = sectionRef.current.querySelectorAll(`.${styles.card}`);

            gsap.to(cards, {
                xPercent: -100 * (cards.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (cards.length - 1),
                    end: () => "+=" + sectionRef.current.offsetWidth
                }
            });
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={triggerRef} className={styles.skillsWrapper}>
            <div ref={sectionRef} className={styles.skillsContainer}>
                {/* Intro Card */}
                <div className={`${styles.card} ${styles.introCard}`}>
                    <h2 className="text-6xl font-bold mb-4">TECHNICAL<br />ARSENAL</h2>
                    <p className="text-xl text-dim max-w-md">
                        A curated stack of technologies I use to build scalable, high-performance applications.
                    </p>
                </div>

                {/* Skill Categories */}
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className={styles.card}>
                        <h3 className="text-4xl font-bold mb-8 uppercase border-b border-white/20 pb-4">
                            {category}
                        </h3>
                        <ul className="space-y-4">
                            {items.map(item => (
                                <li key={item} className="text-2xl text-dim hover:text-white transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
