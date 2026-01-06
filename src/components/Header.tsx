import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
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
                        <span className="font-script" style={{ color: 'var(--primary-red)', fontSize: '2.5rem' }}>
                            Slaščičarstvo MM
                        </span>
                    </div>
                    <ul className={styles.menu}>
                        <li><Link href="/">DOMOV</Link></li>
                        <li><Link href="/ponudba">PONUDBA</Link></li>
                        <li><Link href="/galerija">GALERIJA</Link></li>
                        <li><Link href="/kontakt">KONTAKT</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
