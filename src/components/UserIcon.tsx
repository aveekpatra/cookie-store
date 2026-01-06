'use client';

import Link from 'next/link';
import { useUser } from '@/context/UserContext';
import styles from './UserIcon.module.css';

export default function UserIcon() {
    const { user, isLoggedIn } = useUser();

    return (
        <Link href="/uporabnik" className={styles.userButton}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M20 21a8 8 0 0 0-16 0"></path>
            </svg>
            {isLoggedIn && user && (
                <span className={styles.userName}>{user.name.split(' ')[0]}</span>
            )}
        </Link>
    );
}
