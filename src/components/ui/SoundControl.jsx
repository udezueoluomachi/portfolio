'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import audioManager from '@/managers/AudioManager';

export default function SoundControl() {
    const [muted, setMuted] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);

    const toggleSound = () => {
        if (!hasInteracted) {
            audioManager.init();
            audioManager.playBGM();
            setHasInteracted(true);
            setMuted(false);
        } else {
            const isMuted = audioManager.toggleMute();
            setMuted(isMuted);
        }
    };

    return (
        <button
            onClick={toggleSound}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 text-dim hover:text-white transition-colors mix-blend-difference"
        >
            <span className="text-xs font-mono tracking-widest hidden md:block">
                {muted ? 'SOUND OFF' : 'SOUND ON'}
            </span>
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
    );
}
