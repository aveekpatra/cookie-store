import Image from 'next/image';
import styles from './page.module.css';

export default function Kontakt() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1 className="font-script" style={{ fontSize: '4rem', color: 'white' }}>Kontaktirajte Nas</h1>
            </div>

            <div className={styles.container}>
                <div className={styles.infoCard}>
                    <h2 className={styles.cardTitle}>Slaščičarstvo MM</h2>
                    <div className={styles.details}>
                        <p><strong>Naslov:</strong> Slovenska cesta 1, 1000 Ljubljana</p>
                        <p><strong>Telefon:</strong> +386 40 123 456</p>
                        <p><strong>Email:</strong> info@slascicarstvomm.si</p>
                    </div>
                    <div className={styles.hours}>
                        <h3>Odpiralni Čas</h3>
                        <p>Ponedeljek - Petek: 8:00 - 16:00</p>
                        <p>Sobota: 8:00 - 12:00</p>
                        <p>Nedelja in prazniki: Zaprto</p>
                    </div>
                </div>

                <div className={styles.formCard}>
                    <h2 className={styles.cardTitle}>Pošljite Povpraševanje</h2>
                    <form className={styles.form}>
                        <input type="text" placeholder="Ime in Priimek" className={styles.input} />
                        <input type="email" placeholder="Email Naslov" className={styles.input} />
                        <textarea placeholder="Vaše sporočilo" rows={5} className={styles.textarea}></textarea>
                        <button type="submit" className={styles.button}>Pošlji</button>
                    </form>
                </div>
            </div>

            <div className={styles.mapContainer}>
                {/* Placeholder for Map - using static image of interior as placeholder */}
                <Image src="/images/interior.png" alt="Interior" fill style={{ objectFit: 'cover', opacity: 0.7 }} />
                <div className={styles.mapOverlay}>
                    <span>Kje nas najdete?</span>
                </div>
            </div>
        </main>
    );
}
