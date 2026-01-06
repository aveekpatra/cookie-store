'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal,
        isCartOpen,
        setIsCartOpen
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <>
            <div className={styles.overlay} onClick={() => setIsCartOpen(false)} />
            <div className={styles.drawer}>
                <div className={styles.header}>
                    <h2>Vaša Košarica</h2>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsCartOpen(false)}
                        aria-label="Close cart"
                    >
                        ✕
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className={styles.empty}>
                        <p>Vaša košarica je prazna</p>
                    </div>
                ) : (
                    <>
                        <div className={styles.items}>
                            {cartItems.map(item => (
                                <div key={item.product.id} className={styles.item}>
                                    <div className={styles.itemImage}>
                                        <Image
                                            src={item.product.image}
                                            alt={item.product.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <h3>{item.product.name}</h3>
                                        <p className={styles.price}>€{item.product.price.toFixed(2)}</p>
                                        <div className={styles.quantity}>
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => removeFromCart(item.product.id)}
                                    >
                                        🗑
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.total}>
                                <span>Skupaj:</span>
                                <span className={styles.totalPrice}>€{cartTotal.toFixed(2)}</span>
                            </div>
                            <Link
                                href="/blagajna"
                                className={styles.checkoutBtn}
                                onClick={() => setIsCartOpen(false)}
                            >
                                Nadaljuj na blagajno
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
