'use client';

import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function Home() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroImageContainer}>
                    <Image
                        src="/images/hero.png"
                        alt="Slaščičarstvo MM"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className={styles.heroOverlay}></div>
                </div>

                <div className={styles.heroContent}>
                    <h1 className={`font-script ${styles.heroTitle}`}>
                        Slaščičarstvo M.M.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Z vami že od leta 2000
                    </p>
                    <Link href="/o-nas" className={styles.heroButton}>
                        VEČ O NAS
                    </Link>
                </div>
            </section>

            {/* Locations Section */}
            <section className={styles.sectionContainer}>
                <RevealOnScroll>
                    <div className={styles.contentCard}>
                        <h2 className={styles.cardTitle}>Naše Lokacije</h2>
                        <div className={styles.locationsGrid}>
                            <div className={styles.locationCard}>
                                <div className={styles.locationImageWrapper}>
                                    <Image src="/images/cafe-katja.png" alt="Kavarna Katja" fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className={styles.locationContent}>
                                    <h3>Kavarna Katja</h3>
                                    <p>Merkur Primsko</p>
                                </div>
                            </div>
                            <div className={styles.locationCard}>
                                <div className={styles.locationImageWrapper}>
                                    <Image src="/images/antic-caffe.png" alt="Antic Caffe" fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className={styles.locationContent}>
                                    <h3>Antic Caffe</h3>
                                    <p>Šenčur</p>
                                </div>
                            </div>
                            <div className={styles.locationCard}>
                                <div className={styles.locationImageWrapper}>
                                    <Image src="/images/cafe-mause.png" alt="Kavarna Mause" fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className={styles.locationContent}>
                                    <h3>Kavarna Mause</h3>
                                    <p>Kranj</p>
                                </div>
                            </div>
                            <div className={styles.locationCard}>
                                <div className={styles.locationImageWrapper}>
                                    <Image src="/images/cafe-mm.png" alt="Kavarna M.M." fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div className={styles.locationContent}>
                                    <h3>Kavarna M.M.</h3>
                                    <p>Čirče pri Kranju</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            {/* Offerings Section */}
            <section className={styles.sectionContainer}>
                <RevealOnScroll>
                    <h2 className={styles.sectionTitle}>KAJ VAM NUDIMO</h2>
                </RevealOnScroll>
                <div className={styles.offerGrid}>
                    <RevealOnScroll delay={0}>
                        <Link href="/ponudba" className={styles.offerCard}>
                            <div className={styles.offerImage}>
                                <Image src="/images/hero.png" alt="Torte" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.offerContent}>
                                <h3>Torte</h3>
                            </div>
                        </Link>
                    </RevealOnScroll>
                    <RevealOnScroll delay={100}>
                        <Link href="/ponudba" className={styles.offerCard}>
                            <div className={styles.offerImage}>
                                <Image src="/images/cookies.png" alt="Domači piškoti" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.offerContent}>
                                <h3>Domači Piškoti</h3>
                            </div>
                        </Link>
                    </RevealOnScroll>
                    <RevealOnScroll delay={200}>
                        <Link href="/ponudba" className={styles.offerCard}>
                            <div className={styles.offerImage}>
                                <Image src="/images/macarons.png" alt="Rezine" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.offerContent}>
                                <h3>Rezine</h3>
                            </div>
                        </Link>
                    </RevealOnScroll>
                    <RevealOnScroll delay={100}>
                        <Link href="/ponudba" className={styles.offerCard}>
                            <div className={styles.offerImage}>
                                <Image src="/images/wedding-cake.png" alt="Poročne Torte" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.offerContent}>
                                <h3>Poročne Torte</h3>
                            </div>
                        </Link>
                    </RevealOnScroll>
                    <RevealOnScroll delay={200}>
                        <Link href="/ponudba" className={styles.offerCard}>
                            <div className={styles.offerImage}>
                                <Image src="/images/cupcakes.png" alt="Sladki Program" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.offerContent}>
                                <h3>Sladki Program</h3>
                            </div>
                        </Link>
                    </RevealOnScroll>
                    <RevealOnScroll delay={300}>
                        <Link href="/ponudba" className={styles.offerCard}>
                            <div className={styles.offerImage}>
                                <Image src="/images/about.png" alt="Domači rezanci" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.offerContent}>
                                <h3>Domači Rezanci</h3>
                            </div>
                        </Link>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className={styles.sectionContainer}>
                <RevealOnScroll>
                    <div className={styles.contentCard}>
                        <h2 className={styles.cardTitle}>Mnenja naših strank</h2>
                        <div className={styles.testimonialsGrid}>
                            <div className={styles.testimonialItem}>
                                <div className={styles.stars}>★★★★★</div>
                                <p className={styles.testimonialText}>"Zelo rada greva z možem na kavico, prijeten ambiet, prijazno osebje, zelo dobre trotice, piškoti različnih vrst in domaći rezanci mmmmm"</p>
                                <p className={styles.testimonialAuthor}>- Klavdija Pečirer -</p>
                            </div>
                            <div className={styles.testimonialItem}>
                                <div className={styles.stars}>★★★★★</div>
                                <p className={styles.testimonialText}>"Tortice in osebje več kot odlično. Ostanite še naprej tako odlični!"</p>
                                <p className={styles.testimonialAuthor}>- Ferrari Šubic -</p>
                            </div>
                            <div className={styles.testimonialItem}>
                                <div className={styles.stars}>★★★★★</div>
                                <p className={styles.testimonialText}>"Krasen lokal, super postrežba in odlične slaščice, testenine,…"</p>
                                <p className={styles.testimonialAuthor}>- Metka Mujagic -</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            {/* Contact Form */}
            <section className={styles.sectionContainer}>
                <RevealOnScroll>
                    <div className={styles.contentCard}>
                        <h2 className={styles.cardTitle}>Stopite v Stik</h2>
                        <form className={styles.contactForm}>
                            <div className={styles.formRow}>
                                <input type="text" placeholder="Ime in Priimek" className={styles.input} />
                                <input type="email" placeholder="Email Naslov" className={styles.input} />
                            </div>
                            <input type="tel" placeholder="Telefon" className={styles.input} />
                            <textarea placeholder="Vaše sporočilo" rows={5} className={styles.textarea}></textarea>
                            <button type="submit" className={styles.heroButton + ' ' + styles.submitButton}>
                                POŠLJI SPOROČILO
                            </button>
                        </form>
                    </div>
                </RevealOnScroll>
            </section>
        </main>
    );
}
