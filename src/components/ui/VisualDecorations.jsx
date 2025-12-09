'use client';

import { motion } from 'framer-motion';

export default function VisualDecorations() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Subtle Grid Floor */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                                   linear-gradient(to bottom, #888 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    perspective: '1000px',
                    transform: 'rotateX(20deg) scale(1.2)'
                }}
            />

            {/* Floating Data Hex Strings */}
            <motion.div
                className="absolute top-1/4 right-10 text-[10px] font-mono text-dim/20"
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                0x4F 0x4C 0x55 0x4F 0x4D 0x41 0x43 0x48 0x49
            </motion.div>

            <motion.div
                className="absolute bottom-1/3 left-20 text-[10px] font-mono text-dim/20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            >
                :: SYSTEM_READY :: <br />
                :: CORE_ONLINE ::
            </motion.div>

            {/* Abstract Geometry */}
            <motion.div
                className="absolute top-[15%] left-[10%] w-[30vh] h-[30vh] border border-white/5 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                className="absolute bottom-[20%] right-[5%] w-[40vh] h-[40vh] border border-white/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}
