'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

export default function Kosarica() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Vaša Košarica</h1>
            </section>

            <div className={styles.container}>
                {cartItems.length === 0 ? (
                    <div className={styles.empty}>
                        <div className={styles.emptyIcon}>🛒</div>
                        <h2>Vaša košarica je prazna</h2>
                        <p>Dodajte nekaj sladkih dobrot iz naše ponudbe!</p>
                        <Link href="/ponudba" className={styles.shopBtn}>
                            Obiščite trgovino
                        </Link>
                    </div>
                ) : (
                    <div className={styles.cartLayout}>
                        {/* Cart Items */}
                        <div className={styles.itemsSection}>
                            <div className={styles.cartHeader}>
                                <h2>Izdelki ({cartItems.length})</h2>
                                <button onClick={clearCart} className={styles.clearBtn}>
                                    Izprazni košarico
                                </button>
                            </div>

                            {cartItems.map(item => (
                                <div key={item.product.id} className={styles.cartItem}>
                                    <div className={styles.itemImage}>
                                        <Image
                                            src={item.product.image}
                                            alt={item.product.name}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className={styles.itemInfo}>
                                        <h3>{item.product.name}</h3>
                                        <p className={styles.itemPrice}>€{item.product.price.toFixed(2)}</p>
                                    </div>
                                    <div className={styles.quantityControls}>
                                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <div className={styles.itemTotal}>
                                        €{(item.product.price * item.quantity).toFixed(2)}
                                    </div>
                                    <button
                                        className={styles.removeBtn}
                                        onClick={() => removeFromCart(item.product.id)}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className={styles.summary}>
                            <h2>Povzetek naročila</h2>
                            <div className={styles.summaryRow}>
                                <span>Vmesna vsota:</span>
                                <span>€{cartTotal.toFixed(2)}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Dostava:</span>
                                <span>Po dogovoru</span>
                            </div>
                            <div className={styles.summaryTotal}>
                                <span>Skupaj:</span>
                                <span>€{cartTotal.toFixed(2)}</span>
                            </div>
                            <Link href="/kontakt" className={styles.checkoutBtn}>
                                Nadaljuj na naročilo
                            </Link>
                            <Link href="/ponudba" className={styles.continueBtn}>
                                ← Nadaljuj z nakupovanjem
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
