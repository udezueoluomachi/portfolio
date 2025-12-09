'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring config for the trailing circle (smooth lag)
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.getAttribute('role') === 'button'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Dot (Instant) */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: "-50%",
                    y: "-50%"
                }}
            />

            {/* Trailing Ring (Spring) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    x: "-50%",
                    y: "-50%"
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    opacity: isHovering ? 0.8 : 0.5,
                    backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent"
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
            />
        </>
    );
}
