'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
    return (
        <main className={styles.main}>
            {/* Hero with Full Image */}
            <section className={styles.hero}>
                <div className={styles.heroImage}>
                    <Image
                        src="/images/hero.png"
                        alt="Slaščičarstvo MM"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={styles.heroContent}>
                    <h1>Slaščičarstvo M.M.</h1>
                    <p>Z vami že od leta 2000</p>
                    <Link href="/o-nas" className={styles.heroBtn}>
                        Več o nas
                    </Link>
                </div>
            </section>

            {/* Intro Split Section */}
            <RevealOnScroll>
                <section className={styles.splitSection}>
                    <div className={styles.splitImage}>
                        <Image
                            src="/images/about.png"
                            alt="O nas"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.splitContent}>
                        <span className={styles.eyebrow}>Dobrodošli</span>
                        <h2>Družinsko podjetje iz Kranja</h2>
                        <p>
                            Slaščičarstvo M.M. je družinsko podjetje v Čirčah pri Kranju.
                            Že več kot 24 let ustvarjamo sladke trenutke za naše stranke.
                        </p>
                        <p>
                            Vsi naši izdelki so izdelani ročno, brez umetnih dodatkov ali aditivov.
                        </p>
                        <Link href="/o-nas" className={styles.linkBtn}>
                            Spoznajte nas →
                        </Link>
                    </div>
                </section>
            </RevealOnScroll>

            {/* Stats Bar */}
            <RevealOnScroll direction="none">
                <section className={styles.statsBar}>
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>2000</span>
                        <span className={styles.statLabel}>Leto ustanovitve</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>40+</span>
                        <span className={styles.statLabel}>Vrst piškotov</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>4</span>
                        <span className={styles.statLabel}>Kavarne</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>25</span>
                        <span className={styles.statLabel}>Zaposlenih</span>
                    </div>
                </section>
            </RevealOnScroll>

            {/* Products Showcase */}
            <section className={styles.showcase}>
                <RevealOnScroll>
                    <div className={styles.showcaseHeader}>
                        <span className={styles.eyebrow}>Ponudba</span>
                        <h2>Kaj vam nudimo</h2>
                    </div>
                </RevealOnScroll>
                <div className={styles.showcaseGrid}>
                    <RevealOnScroll delay={0}>
                        <Link href="/ponudba" className={styles.showcaseItem}>
                            <Image src="/images/menu-cakes.png" alt="Torte" fill style={{ objectFit: 'cover' }} />
                            <div className={styles.showcaseLabel}>Torte po naročilu</div>
                        </Link>
                    </RevealOnScroll>
                    <RevealOnScroll delay={100}>
                        <Link href="/ponudba" className={styles.showcaseItem}>
                            <Image src="/images/menu-cookies.png" alt="Piškoti" fill style={{ objectFit: 'cover' }} />
                            <div className={styles.showcaseLabel}>Domači piškoti</div>
                        </Link>
                    </RevealOnScroll>
                    <RevealOnScroll delay={200}>
                        <Link href="/ponudba" className={styles.showcaseItem}>
                            <Image src="/images/menu-pastries.png" alt="Rezine" fill style={{ objectFit: 'cover' }} />
                            <div className={styles.showcaseLabel}>Rezine in peciva</div>
                        </Link>
                    </RevealOnScroll>
                    <RevealOnScroll delay={300}>
                        <Link href="/ponudba" className={styles.showcaseItem}>
                            <Image src="/images/menu-pasta.png" alt="Testenine" fill style={{ objectFit: 'cover' }} />
                            <div className={styles.showcaseLabel}>Domače testenine</div>
                        </Link>
                    </RevealOnScroll>
                </div>
                <RevealOnScroll delay={200}>
                    <Link href="/ponudba" className={styles.showcaseBtn}>
                        Oglejte si celotno ponudbo →
                    </Link>
                </RevealOnScroll>
            </section>

            {/* Locations Split - Reversed */}
            <RevealOnScroll>
                <section className={styles.splitSection + ' ' + styles.reversed}>
                    <div className={styles.splitImage}>
                        <Image
                            src="/images/interior.png"
                            alt="Kavarna"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className={styles.splitContent}>
                        <span className={styles.eyebrow}>Lokacije</span>
                        <h2>Obiščite nas</h2>
                        <p>
                            Imamo štiri kavarne, kjer lahko uživate v naših dobrotah.
                            Vsaka ponuja prijetno vzdušje in široko izbiro slaščic.
                        </p>
                        <div className={styles.locationsList}>
                            <div className={styles.locationItem}>
                                <strong>Kavarna Katja</strong>
                                <span>Merkur, Kranj</span>
                            </div>
                            <div className={styles.locationItem}>
                                <strong>Antic Cafe</strong>
                                <span>Šenčur</span>
                            </div>
                            <div className={styles.locationItem}>
                                <strong>Kavarna Mause</strong>
                                <span>Planina</span>
                            </div>
                            <div className={styles.locationItem}>
                                <strong>Kavarna Krtino</strong>
                                <span>Krtina</span>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* Testimonials */}
            <section className={styles.testimonials}>
                <RevealOnScroll>
                    <div className={styles.testimonialsHeader}>
                        <span className={styles.eyebrow}>Mnenja</span>
                        <h2>Kaj pravijo stranke</h2>
                    </div>
                </RevealOnScroll>
                <div className={styles.testimonialsGrid}>
                    <RevealOnScroll delay={0}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.stars}>★★★★★</div>
                            <p>"Zelo rada greva z možem na kavico, prijeten ambiet, prijazno osebje, zelo dobre trotice, piškoti različnih vrst in domaći rezanci mmmmm"</p>
                            <cite>— Klavdija P.</cite>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={100}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.stars}>★★★★★</div>
                            <p>"Tortice in osebje več kot odlično. Ostanite še naprej tako odlični!"</p>
                            <cite>— Ferrari Š.</cite>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={200}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.stars}>★★★★★</div>
                            <p>"Krasen lokal, super postrežba in odlične slaščice, testenine,…"</p>
                            <cite>— Metka M.</cite>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* CTA */}
            <RevealOnScroll direction="none">
                <section className={styles.cta}>
                    <h2>Naročite torto za posebno priložnost</h2>
                    <p>Ali nas preprosto obiščite v eni izmed naših kavarn</p>
                    <Link href="/kontakt" className={styles.ctaBtn}>
                        Kontaktirajte nas
                    </Link>
                </section>
            </RevealOnScroll>
        </main>
    );
}
