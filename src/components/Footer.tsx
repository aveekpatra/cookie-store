import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <h3 className="font-script" style={{ color: 'var(--primary-red)', marginBottom: '1rem' }}>Slaščičarstvo MM</h3>
                    <p>Tradicija in kvaliteta od leta 2026.</p>
                </div>
                <div className={styles.column}>
                    <h4>Kontakt</h4>
                    <p>Slovenska cesta 1</p>
                    <p>1000 Ljubljana</p>
                    <p>Email: info@slascicarstvomm.si</p>
                </div>
                <div className={styles.column}>
                    <h4>Odpiralni čas</h4>
                    <p>Pon - Pet: 8:00 - 16:00</p>
                    <p>Sob: 8:00 - 12:00</p>
                    <p>Ned: Zaprto</p>
                </div>
            </div>
            <div className={styles.copyright}>
                &copy; 2026 Slaščičarstvo MM. Vse pravice pridržane.
            </div>
        </footer>
    );
}
