'use client';

import { useUser } from '@/context/UserContext';
import styles from './page.module.css';

export default function Uporabnik() {
    const { user, isLoggedIn, orders, logout } = useUser();

    if (!isLoggedIn || !user) {
        return (
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h1 className={styles.heroTitle}>Moj Račun</h1>
                </section>
                <div className={styles.container}>
                    <div className={styles.loginCard}>
                        <h2>Prijava</h2>
                        <p>Za ogled vašega računa se prosimo prijavite.</p>
                        <form className={styles.loginForm}>
                            <input type="email" placeholder="E-pošta" />
                            <input type="password" placeholder="Geslo" />
                            <button type="submit">Prijava</button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Moj Račun</h1>
            </section>

            <div className={styles.container}>
                <div className={styles.dashboard}>
                    {/* Profile Section */}
                    <section className={styles.profileSection}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2>Profil</h2>
                                <button className={styles.logoutBtn} onClick={logout}>
                                    Odjava
                                </button>
                            </div>
                            <div className={styles.profileInfo}>
                                <div className={styles.avatar}>
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className={styles.info}>
                                    <p><strong>Ime:</strong> {user.name}</p>
                                    <p><strong>E-pošta:</strong> {user.email}</p>
                                    <p><strong>Telefon:</strong> {user.phone}</p>
                                    <p><strong>Naslov:</strong> {user.address}</p>
                                </div>
                            </div>
                            <button className={styles.editBtn}>Uredi profil</button>
                        </div>
                    </section>

                    {/* Orders Section */}
                    <section className={styles.ordersSection}>
                        <div className={styles.card}>
                            <h2>Moja naročila</h2>
                            {orders.length === 0 ? (
                                <p className={styles.noOrders}>Nimate še nobenih naročil.</p>
                            ) : (
                                <div className={styles.ordersList}>
                                    {orders.map(order => (
                                        <div key={order.id} className={styles.orderCard}>
                                            <div className={styles.orderHeader}>
                                                <span className={styles.orderId}>{order.id}</span>
                                                <span className={styles.orderDate}>{order.date}</span>
                                                <span className={`${styles.status} ${styles[order.status]}`}>
                                                    {order.status === 'processing' && 'V obdelavi'}
                                                    {order.status === 'shipped' && 'Poslano'}
                                                    {order.status === 'delivered' && 'Dostavljeno'}
                                                </span>
                                            </div>
                                            <div className={styles.orderItems}>
                                                {order.items.map((item, idx) => (
                                                    <span key={idx}>
                                                        {item.quantity}x {item.name}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className={styles.orderTotal}>
                                                Skupaj: <strong>€{order.total.toFixed(2)}</strong>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
