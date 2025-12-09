'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.scss';

const words = ["INITIALIZING...", "LOADING ASSETS...", "DECRYPTING PROFILE...", "ACCESS GRANTED"];

export default function Loader({ onComplete }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === words.length - 1) {
            setTimeout(onComplete, 1000);
            return;
        }

        const timeout = setTimeout(() => {
            setIndex(prev => prev + 1);
        }, 800);

        return () => clearTimeout(timeout);
    }, [index, onComplete]);

    return (
        <motion.div
            className={styles.loader}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.text}>
                <span className="text-dim">{`> `}</span>
                {words[index]}
                <span className={styles.cursor}>_</span>
            </div>
        </motion.div>
    );
}
