'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/data/skills';
import styles from './Skills.module.scss';
import HackerText from '../ui/HackerText';

export default function Skills() {
    const wrapperRef = useRef(null);
    const worldRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Horizontal Scroll Effect (Sideways Pan)
            // We move the world on the X axis

            const totalWidth = 4000; // How long the hallway is horizontally

            gsap.to(worldRef.current, {
                x: -totalWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    // We rely on the wrapper's height for scroll space, 
                    // and use CSS sticky/fixed in the child to keep it in view.
                }
            });

        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    const Panel = ({ title, items, x, z = 0, rotationY = 0 }) => (
        <div
            className={styles.panel}
            style={{
                transform: `translate3d(${x}px, -50%, ${z}px) rotateY(${rotationY}deg)`
            }}
        >
            <h3 className={styles.panelTitle}>{title}</h3>
            <ul className="space-y-2 font-mono text-sm leading-relaxed text-dim">
                {items.map(item => (
                    <li key={item} className="hover:text-white transition-colors cursor-crosshair">
                        &gt; {item}
                    </li>
                ))}
            </ul>
        </div>
    );

    const Artifact = ({ content, x, z = 0, rotationY = 0, color = "#fff" }) => (
        <div
            className={styles.artifact}
            style={{
                transform: `translate3d(${x}px, -50%, ${z}px) rotateY(${rotationY}deg)`,
                borderColor: color,
                color: color
            }}
        >
            {content}
        </div>
    );

    return (
        <section ref={wrapperRef} className={styles.skillsWrapper}>
            <div className={styles.stickyContainer}>
                <div className="perspective-viewport w-full h-full relative" style={{ perspective: '1000px' }}>
                    <div ref={worldRef} className={styles.world} style={{ transform: 'translate3d(0,0,0)' }}>

                        {/* The Floor Path */}
                        <div className={styles.floor}>
                            {/* Dashed Path Visualization */}
                            <div className="absolute top-1/2 left-0 w-[5000px] h-1 border-t-2 border-dashed border-white/20 transform -translate-y-1/2"></div>
                        </div>

                        {/* Entrance Text */}
                        <div className={styles.introText} style={{ transform: 'translate3d(50vw, -50%, 0)' }}>
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mix-blend-difference">
                                <HackerText text="ARSENAL" />
                            </h2>
                            <p className="font-mono text-dim mt-4">SECURE SERVER HALLWAY</p>
                        </div>

                        {/* SCENE 1: Frontend (Left) */}
                        <Panel
                            title="FRONTEND"
                            items={skills.frontend}
                            x={1500}
                            z={-200}
                            rotationY={15}
                        />

                        {/* SCENE 2: Backend (Right) */}
                        <Panel
                            title="BACKEND"
                            items={skills.backend}
                            x={2500}
                            z={-200}
                            rotationY={-15}
                        />

                        {/* SCENE 3: Tools (Center/End) */}
                        <Panel
                            title="DEVOPS & TOOLS"
                            items={skills.devops}
                            x={3500}
                            z={0}
                            rotationY={0}
                        />

                        {/* Artifacts */}
                        <Artifact
                            content="φ"
                            x={2000}
                            z={-600}
                            rotationY={45}
                            color="rgba(255, 255, 0, 0.5)"
                        />

                        <Artifact
                            content="432Hz"
                            x={3000}
                            z={-400}
                            rotationY={-25}
                            color="rgba(0, 255, 255, 0.5)"
                        />

                        <div
                            className="absolute font-bold text-[100px] opacity-10 pointer-events-none whitespace-nowrap"
                            style={{ transform: 'translate3d(4500px, -50%, -500px)' }}
                        >
                            END OF LINE
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
