'use client';

import { useState, useEffect, useRef } from 'react';

const CHARS = "!@#$%^&*():{};|,.<>/?~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function HackerText({ text, className }) {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    const startScramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <span
            className={className}
            onMouseEnter={startScramble}
            style={{ display: 'inline-block' }} // Ensures transform works if needed
        >
            {displayText}
        </span>
    );
}
