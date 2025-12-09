'use client';

import { motion } from 'framer-motion';
import { Cat, Globe, Rocket } from 'lucide-react';

export default function VisualDecorations() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Big Marquee Words */}
            <div className="absolute top-[10%] -left-20 opacity-[0.03] text-[20vw] font-bold font-mono whitespace-nowrap animate-marquee">
                ENGINEER CREATE DEPLOY REPEAT
            </div>
            <div className="absolute bottom-[10%] -right-20 opacity-[0.03] text-[20vw] font-bold font-mono whitespace-nowrap animate-marquee-reverse">
                FULLSTACK DREAM BUILD SHIP
            </div>

            {/* GitHub Pet "Void Cat" */}
            <motion.div
                className="absolute bottom-10 right-20 text-dim opacity-20"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Cat size={64} />
            </motion.div>

            {/* Floating Vector Shapes */}
            <motion.div
                className="absolute top-1/3 left-10 text-dim opacity-10"
                animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Globe size={128} />
            </motion.div>

            {/* Spaceship passing by */}
            <motion.div
                className="absolute top-1/4 -left-20 text-dim opacity-10"
                animate={{
                    x: "120vw",
                    y: "20vh",
                    rotate: 90,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Rocket size={48} />
            </motion.div>
        </div>
    );
}

/* Add custom animations in global css or here if preferred, using Tailwind mostly */
