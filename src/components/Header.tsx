import Link from 'next/link';
import styles from './Header.module.css';
import CartIcon from './CartIcon';
import UserIcon from './UserIcon';

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
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <span className="font-script" style={{ color: 'var(--primary-red)', fontSize: '2.5rem' }}>
                                Slaščičarstvo MM
                            </span>
                        </Link>
                    </div>
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
                </div>
            </nav>
        </header>
    );
}

