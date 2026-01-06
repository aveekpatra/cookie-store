'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';
import styles from './RevealOnScroll.module.css';

interface RevealOnScrollProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
}

export default function RevealOnScroll({
    children,
    delay = 0,
    direction = 'up',
    className = ''
}: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const directionClass = styles[direction] || '';

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${directionClass} ${isVisible ? styles.visible : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
