'use client';

import { useEffect, useState } from 'react';
import styles from './Loading.module.css';

export default function Loading() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <div className={styles.loadingContainer}>
            <div className={styles.logo}>Slaščičarstvo MM</div>
            <div className={styles.spinner} />
        </div>
    );
}
