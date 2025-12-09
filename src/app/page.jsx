'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Loader from '@/components/ui/Loader';
import SoundControl from '@/components/ui/SoundControl';

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Loader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <div className="relative z-10">
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                    <SoundControl />
                </div>
            )}
        </>
    );
}
