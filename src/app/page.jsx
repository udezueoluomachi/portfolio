'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '@/components/ui/Loader';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import SoundControl from '@/components/ui/SoundControl';
import TVOverlay from '@/components/ui/TVOverlay';
import ParallaxBackground from '@/components/ui/ParallaxBackground';
import CustomCursor from '@/components/ui/CustomCursor';
import VisualDecorations from '@/components/ui/VisualDecorations';
import DockNav from '@/components/ui/DockNav';

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Loader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <div className="relative z-10 w-full overflow-x-hidden">
                    <CustomCursor />
                    <TVOverlay />
                    <VisualDecorations />
                    <ParallaxBackground />
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                    <SoundControl />
                    <DockNav /> {/* Liquid Glass Navigation */}
                </div>
            )}
        </>
    );
}
