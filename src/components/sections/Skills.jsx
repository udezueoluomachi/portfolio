'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/data/skills';
import styles from './Skills.module.scss';
import HackerText from '../ui/HackerText';

export default function Skills() {
    const wrapperRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Standard Horizontal Scroll
            // Move the track to the left as we scroll down

            const track = trackRef.current;
            const scrollWidth = track.scrollWidth - window.innerWidth;

            gsap.to(track, {
                x: -scrollWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    // Pin the viewport container
                    pin: ".sticky-viewport"
                }
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    const Panel = ({ title, items, rotationY = 15 }) => (
        <div className={styles.section}>
            <div className={styles.panel}>
                <h3 className={styles.panelTitle}>{title}</h3>
                <ul className="space-y-4 font-mono text-lg text-dim">
                    {items.map(item => (
                        <li key={item} className="hover:text-white transition-colors cursor-crosshair">
                            &gt; {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <section ref={wrapperRef} className={styles.skillsWrapper}>
            <div className={`${styles.stickyContainer} sticky-viewport`}>
                <div ref={trackRef} className={styles.track}>

                    {/* The Floor Line (Moves with the track) */}
                    <div className={styles.floor}></div>

                    {/* INTRO */}
                    <div className={`${styles.section} ${styles.introSection}`}>
                        <h2 className="text-8xl md:text-9xl font-bold tracking-tighter mix-blend-difference mb-4">
                            <HackerText text="ARSENAL" />
                        </h2>
                        <p className="font-mono text-dim text-xl">SCROLL TO ACCESS MODULES &gt;&gt;</p>
                    </div>

                    {/* ITEM 1: FRONTEND */}
                    <Panel title="FRONTEND" items={skills.frontend} />

                    {/* Artifact 1 */}
                    <div className={styles.section} style={{ width: '40vw' }}>
                        <div className={styles.artifact} style={{ color: 'yellow' }}>φ</div>
                    </div>

                    {/* ITEM 2: BACKEND */}
                    <Panel title="BACKEND" items={skills.backend} />

                    {/* Artifact 2 */}
                    <div className={styles.section} style={{ width: '40vw' }}>
                        <div className={styles.artifact} style={{ color: 'cyan' }}>432Hz</div>
                    </div>

                    {/* ITEM 3: TOOLS */}
                    <Panel title="DEVOPS" items={skills.devops} />

                    {/* END */}
                    <div className={styles.section} style={{ width: '50vw' }}>
                        <h2 className="text-6xl font-bold opacity-10">END OF LINE</h2>
                    </div>

                </div>
            </div>
        </section>
    );
}
