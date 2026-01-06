import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroImageContainer}>
                    <Image
                        src="/images/hero.png"
                        alt="Luxurious Cake"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
                <div className={styles.heroContent}>
                    <span className={`${styles.badge} font-script`}>Tradicija & Eleganca</span>
                    <h1 className="font-script" style={{ color: 'white', fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: '1.1', marginBottom: '1.5rem', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                        Sladki Užitki <br /> Brez Meja
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontWeight: 300 }}>
                        Ustvarjamo nepozabne trenutke s pridihom domačnosti in vrhunske slaščičarske umetnosti.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/ponudba" className={styles.primaryButton}>Naša Ponudba</Link>
                        <Link href="/kontakt" className={styles.secondaryButton}>Kontaktirajte Nas</Link>
                    </div>
                </div>
                <div className={styles.waveDivider}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" opacity=".5"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="white" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill}></path>
                    </svg>
                </div>
            </section>

            {/* Introduction / About Teaser */}
            <section className={styles.section} style={{ backgroundColor: 'var(--bg-white)', paddingBottom: '2rem' }}>
                <div className={styles.container}>
                    <div className={styles.splitLayout}>
                        <div className={styles.textContent}>
                            <h4 className={styles.subheading}>NAŠA ZGODBA</h4>
                            <h2 className={`font-script ${styles.heading}`}>Ljubezen do Sladkega</h2>
                            <p className={styles.description}>
                                V naši slaščičarni vsak izdelek pripoveduje zgodbo. Z uporabo le najboljših, naravnih sestavin in tradicionalnih receptov, ki se prenašajo iz roda v rod, ustvarjamo sladice, ki niso le hrana, ampak doživetje.
                            </p>
                            <p className={styles.description}>
                                Brez umetnih dodatkov, le čista umetnost okusov. Naj bo to poročna torta ali preprost piškot ob kavi – zavezani smo popolnosti.
                            </p>
                            <Link href="/o-nas" className={styles.textLink}>Preberite več o nas &rarr;</Link>
                        </div>
                        <div className={styles.imageContent}>
                            <div className={styles.imageFrame}>
                                <Image src="/images/about.png" alt="Pastry Chef" width={600} height={400} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className={styles.section} style={{ backgroundColor: 'var(--bg-light)' }}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={`font-script ${styles.heading}`} style={{ textAlign: 'center' }}>Izbrana Ponudba</h2>
                        <div className={styles.dividerIcon}>❦</div>
                    </div>

                    <div className={styles.grid}>
                        <div className={`${styles.card} ${styles.cardPop}`}>
                            <div className={styles.cardImageWrapper}>
                                <Image src="/images/hero.png" alt="Torte" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Unikatne Torte</h3>
                                <p>Za poroke, rojstne dneve in posebne priložnosti.</p>
                                <span className={styles.cardLink}>Naroči zdaj</span>
                            </div>
                        </div>
                        <div className={`${styles.card} ${styles.cardPop}`}>
                            <div className={styles.cardImageWrapper}>
                                <Image src="/images/macarons.png" alt="Sladice" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Francoski Macarons</h3>
                                <p>Barvita paleta okusov v vsakem grižljaju.</p>
                                <span className={styles.cardLink}>Odkrij okuse</span>
                            </div>
                        </div>
                        <div className={`${styles.card} ${styles.cardPop}`}>
                            <div className={styles.cardImageWrapper}>
                                <Image src="/images/cookies.png" alt="Piškoti" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>Domači Piškoti</h3>
                                <p>Hrustljava radost, pečena z ljubeznijo.</p>
                                <span className={styles.cardLink}>Pokukaj v škatlo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features/Stats */}
            <section className={styles.statsSection}>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Naravne Sestavine</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>15+</span>
                    <span className={styles.statLabel}>Let Izkušenj</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>5000+</span>
                    <span className={styles.statLabel}>Zadovoljnih Strank</span>
                </div>
            </section>

            {/* Newsletter */}
            <section className={styles.newsletterSection}>
                <div className={styles.container} style={{ textAlign: 'center' }}>
                    <h2 className="font-script" style={{ color: 'white', marginBottom: '1rem' }}>Ostanite Sladki</h2>
                    <p style={{ color: '#ccc', marginBottom: '2rem' }}>Prijavite se na naše novice in prejmite sladka presenečenja.</p>
                    <form className={styles.form}>
                        <input type="email" placeholder="Vaš email naslov" className={styles.input} />
                        <button type="submit" className={styles.submitButton}>Prijava</button>
                    </form>
                </div>
            </section>
        </main>
    );
}
