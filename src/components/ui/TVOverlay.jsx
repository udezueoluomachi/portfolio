'use client';

import styles from './TVOverlay.module.scss';

export default function TVOverlay() {
    return (
        <div className={styles.overlay}>
            <div className={styles.scanlines}></div>
            <div className={styles.vignette}></div>
            <div className={styles.noise}></div>
        </div>
    );
}
