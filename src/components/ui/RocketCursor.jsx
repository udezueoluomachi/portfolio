'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function RocketCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
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
        <motion.div
            className="fixed pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <motion.div
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    rotate: isHovering ? 45 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
            >
                <Rocket className="text-white w-8 h-8" />

                {/* Engine Glow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-4 bg-blue-500 blur-sm animate-pulse" />
            </motion.div>
        </motion.div>
    );
}
