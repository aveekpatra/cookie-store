import Image from 'next/image';
import styles from './page.module.css';

export default function ONas() {
    return (
        <main className={styles.container}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroImage}>
                    <Image src="/images/about.png" alt="Naš Chef" fill style={{ objectFit: 'cover' }} priority />
                </div>
                <div className={styles.heroContent}>
                    <h1 className="font-script" style={{ fontSize: '4rem', color: 'var(--primary-red)', marginBottom: '1rem' }}>Naša Zgodba</h1>
                    <p className={styles.lead}>
                        Od skromnih začetkov v domači kuhinji do najbolj priljubljene slaščičarne v mestu.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.textBlock}>
                    <h2>Tradicija, ki traja</h2>
                    <p>
                        Začelo se je z babičinim receptom za jabolčno pito. Danes, 15 let kasneje, še vedno uporabljamo iste temeljne vrednote:
                        <strong> kakovost, strast in potrpežljivost.</strong>
                    </p>
                    <p>
                        Verjamemo, da si vsak zasluži trenutek sladkega razvajanja. Zato pri nas ne sklepamo kompromisov. Uporabljamo le pravo maslo,
                        svežo smetano, belgijsko čokolado in lokalno sadje. Brez praškov, brez ojačevalcev okusa. Le narava v svoji najslajši obliki.
                    </p>
                </div>

                <div className={styles.valuesGrid}>
                    <div className={styles.valueItem}>
                        <span className={styles.icon}>♥</span>
                        <h3>Ročno Delo</h3>
                        <p>Vsak okras, vsak cvet je izdelan ročno z neverjetno natančnostjo.</p>
                    </div>
                    <div className={styles.valueItem}>
                        <span className={styles.icon}>🌿</span>
                        <h3>Naravno</h3>
                        <p>Sodelujemo z lokalnimi kmeti za najbolj sveže sezonske sestavine.</p>
                    </div>
                    <div className={styles.valueItem}>
                        <span className={styles.icon}>★</span>
                        <h3>Odličnost</h3>
                        <p>Neustrezno iskanje popolnosti v vsakem receptu.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
