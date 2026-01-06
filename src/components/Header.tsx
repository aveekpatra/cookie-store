'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import CartIcon from './CartIcon';
import UserIcon from './UserIcon';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.container}>
                    <span>info@slascicarstvomm.si</span>
                    <span>+386 40 123 456</span>
                </div>
            </div>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link href="/" style={{ textDecoration: 'none' }} onClick={closeMenu}>
                            <span className="font-script" style={{ color: 'var(--primary-red)', fontSize: '2.5rem' }}>
                                Slaščičarstvo MM
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className={styles.menu}>
                        <li><Link href="/">DOMOV</Link></li>
                        <li><Link href="/o-nas">O NAS</Link></li>
                        <li><Link href="/ponudba">PONUDBA</Link></li>
                        <li><Link href="/galerija">GALERIJA</Link></li>
                        <li><Link href="/kontakt">KONTAKT</Link></li>
                    </ul>

                    <div className={styles.headerIcons}>
                        <UserIcon />
                        <CartIcon />
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                <ul>
                    <li><Link href="/" onClick={closeMenu}>DOMOV</Link></li>
                    <li><Link href="/o-nas" onClick={closeMenu}>O NAS</Link></li>
                    <li><Link href="/ponudba" onClick={closeMenu}>PONUDBA</Link></li>
                    <li><Link href="/galerija" onClick={closeMenu}>GALERIJA</Link></li>
                    <li><Link href="/kontakt" onClick={closeMenu}>KONTAKT</Link></li>
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
        </header>
    );
}
