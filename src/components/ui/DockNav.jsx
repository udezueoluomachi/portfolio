'use client';

import { motion } from 'framer-motion';
import { Home, Cpu, Layers, Briefcase, Mail } from 'lucide-react';
import { useState } from 'react';

const DockItem = ({ icon: Icon, label, href }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.a
            href={href}
            className="relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ scale: 1.2, translateY: -10 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* Glass Background per item (IOS Dock style) */}
            <div className={`absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-md`} />

            <Icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors relative z-10" />

            {/* Tooltip */}
            {hovered && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -40 }}
                    className="absolute text-[10px] font-mono bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-white/10 whitespace-nowrap"
                >
                    {label}
                </motion.span>
            )}

            {/* Reflection/Dot */}
            <div className="w-1 h-1 bg-white/50 rounded-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.a>
    );
};

export default function DockNav() {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            {/* The Liquid Glass Container */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:border-white/20 transition-colors"
                style={{
                    boxShadow: '0 0 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.05)'
                }}
            >
                <DockItem icon={Home} label="HOME" href="#hero" />
                <DockItem icon={Cpu} label="ARSENAL" href="#skills" />
                <DockItem icon={Briefcase} label="EXP" href="#experience" />
                <DockItem icon={Layers} label="WORK" href="#projects" />
                <DockItem icon={Mail} label="SIGNAL" href="#contact" />
            </motion.div>
        </div>
    );
}
