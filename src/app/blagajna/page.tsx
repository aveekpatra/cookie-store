'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import styles from './page.module.css';

type DeliveryOption = 'pickup' | 'standard' | 'express';
type PaymentMethod = 'card' | 'paypal' | 'bank' | 'cash';

const deliveryOptions = [
    { id: 'pickup', name: 'Osebni prevzem', price: 0, time: 'Takoj' },
    { id: 'standard', name: 'Standardna dostava', price: 4.99, time: '3-5 dni' },
    { id: 'express', name: 'Hitra dostava', price: 9.99, time: '1-2 dni' },
] as const;

const paymentMethods = [
    { id: 'card', name: 'Kreditna kartica', icon: '💳' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️' },
    { id: 'bank', name: 'Bančno nakazilo', icon: '🏦' },
    { id: 'cash', name: 'Plačilo ob prevzemu', icon: '💵' },
] as const;

export default function Blagajna() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const { user, isLoggedIn } = useUser();

    const [delivery, setDelivery] = useState<DeliveryOption>('pickup');
    const [payment, setPayment] = useState<PaymentMethod>('card');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || '',
        notes: '',
    });

    const deliveryPrice = deliveryOptions.find(d => d.id === delivery)?.price || 0;
    const totalWithDelivery = cartTotal + deliveryPrice;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Fake order submission
        setOrderPlaced(true);
        clearCart();
    };

    if (orderPlaced) {
        return (
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.heroTitle}>Hvala!</h1>
                </section>
                <div className={styles.container}>
                    <div className={styles.successCard}>
                        <div className={styles.successIcon}>✓</div>
                        <h2>Vaše naročilo je bilo uspešno oddano!</h2>
                        <p>Potrditev smo poslali na vaš e-poštni naslov.</p>
                        <p className={styles.orderId}>Številka naročila: <strong>ORD-{Date.now().toString().slice(-6)}</strong></p>
                        <div className={styles.successActions}>
                            <Link href="/ponudba" className={styles.continueBtn}>
                                Nadaljuj z nakupovanjem
                            </Link>
                            <Link href="/uporabnik" className={styles.orderBtn}>
                                Oglej si naročila
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    if (cartItems.length === 0) {
        return (
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.heroTitle}>Blagajna</h1>
                </section>
                <div className={styles.container}>
                    <div className={styles.emptyCart}>
                        <p>Vaša košarica je prazna.</p>
                        <Link href="/ponudba" className={styles.shopBtn}>
                            Obiščite trgovino
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Blagajna</h1>
            </section>

            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.checkoutGrid}>
                    {/* Left Column - Forms */}
                    <div className={styles.formsColumn}>
                        {/* Contact Info */}
                        <div className={styles.section}>
                            <h2>1. Kontaktni podatki</h2>
                            <div className={styles.formGrid}>
                                <input
                                    type="text"
                                    placeholder="Ime in priimek"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="E-pošta"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Telefon"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Naslov za dostavo"
                                    value={formData.address}
                                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    required
                                    className={styles.fullWidth}
                                />
                            </div>
                        </div>

                        {/* Delivery Options */}
                        <div className={styles.section}>
                            <h2>2. Način dostave</h2>
                            <div className={styles.optionsList}>
                                {deliveryOptions.map(option => (
                                    <label
                                        key={option.id}
                                        className={`${styles.optionCard} ${delivery === option.id ? styles.selected : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            name="delivery"
                                            value={option.id}
                                            checked={delivery === option.id}
                                            onChange={() => setDelivery(option.id)}
                                        />
                                        <div className={styles.optionInfo}>
                                            <span className={styles.optionName}>{option.name}</span>
                                            <span className={styles.optionTime}>{option.time}</span>
                                        </div>
                                        <span className={styles.optionPrice}>
                                            {option.price === 0 ? 'Brezplačno' : `€${option.price.toFixed(2)}`}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className={styles.section}>
                            <h2>3. Način plačila</h2>
                            <div className={styles.paymentGrid}>
                                {paymentMethods.map(method => (
                                    <label
                                        key={method.id}
                                        className={`${styles.paymentCard} ${payment === method.id ? styles.selected : ''}`}
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            value={method.id}
                                            checked={payment === method.id}
                                            onChange={() => setPayment(method.id)}
                                        />
                                        <span className={styles.paymentIcon}>{method.icon}</span>
                                        <span className={styles.paymentName}>{method.name}</span>
                                    </label>
                                ))}
                            </div>

                            {payment === 'card' && (
                                <div className={styles.cardForm}>
                                    <input type="text" placeholder="Številka kartice" maxLength={19} />
                                    <div className={styles.cardRow}>
                                        <input type="text" placeholder="MM/LL" maxLength={5} />
                                        <input type="text" placeholder="CVV" maxLength={4} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Notes */}
                        <div className={styles.section}>
                            <h2>4. Opombe</h2>
                            <textarea
                                placeholder="Posebne želje ali navodila za dostavo..."
                                value={formData.notes}
                                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                                rows={3}
                            />
                        </div>
                    </div>

                    {/* Right Column - Summary */}
                    <div className={styles.summaryColumn}>
                        <div className={styles.summaryCard}>
                            <h2>Povzetek naročila</h2>

                            <div className={styles.summaryItems}>
                                {cartItems.map(item => (
                                    <div key={item.product.id} className={styles.summaryItem}>
                                        <div className={styles.summaryItemImage}>
                                            <Image
                                                src={item.product.image}
                                                alt={item.product.name}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className={styles.summaryItemInfo}>
                                            <span>{item.product.name}</span>
                                            <span className={styles.qty}>x{item.quantity}</span>
                                        </div>
                                        <span className={styles.summaryItemPrice}>
                                            €{(item.product.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.summaryTotals}>
                                <div className={styles.summaryRow}>
                                    <span>Vmesna vsota:</span>
                                    <span>€{cartTotal.toFixed(2)}</span>
                                </div>
                                <div className={styles.summaryRow}>
                                    <span>Dostava:</span>
                                    <span>{deliveryPrice === 0 ? 'Brezplačno' : `€${deliveryPrice.toFixed(2)}`}</span>
                                </div>
                                <div className={styles.summaryTotal}>
                                    <span>Skupaj:</span>
                                    <span>€{totalWithDelivery.toFixed(2)}</span>
                                </div>
                            </div>

                            <button type="submit" className={styles.placeOrderBtn}>
                                Oddaj naročilo
                            </button>

                            <p className={styles.disclaimer}>
                                S klikom na "Oddaj naročilo" se strinjate z našimi pogoji poslovanja.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
