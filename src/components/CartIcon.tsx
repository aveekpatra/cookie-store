'use client';

import { useCart } from '@/context/CartContext';
import styles from './CartIcon.module.css';

export default function CartIcon() {
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <button
            className={styles.cartButton}
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="m1 1 4 4m0 0 4.5 9h10l4-8H6"></path>
            </svg>
            {cartCount > 0 && (
                <span className={styles.badge}>{cartCount}</span>
            )}
        </button>
    );
}
