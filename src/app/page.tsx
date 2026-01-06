import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
                    {/* Explicit white color for H1 as requested */}
                    <h1 className="font-script" style={{ fontSize: '5rem', marginBottom: '1rem', color: 'white' }}>
                        Slaščičarstvo M.M.
                    </h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '1px', color: 'white' }}>
                        Z vami že od leta 2000
                    </p>
                    <Link href="/o-nas" className={styles.heroButton}>
                        VEČ O NAS
                    </Link>
                </div>
            </section>

            {/* Locations Section - Now with Images */}
            <section className={styles.sectionContainer}>
                <div className={styles.contentCard}>
                    <h2 className={styles.cardTitle}>Naše Lokacije</h2>
                    <div className={styles.locationsGrid}>
                        {/* Location 1: Kavarna Katja */}
                        <div className={styles.locationCard}>
                            <div className={styles.locationImageWrapper}>
                                <Image src="/images/cafe-katja.png" alt="Kavarna Katja" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.locationContent}>
                                <h3>Kavarna Katja</h3>
                                <p>Merkur Primsko</p>
                            </div>
                        </div>

                        {/* Location 2: Antic Caffe */}
                        <div className={styles.locationCard}>
                            <div className={styles.locationImageWrapper}>
                                <Image src="/images/antic-caffe.png" alt="Antic Caffe" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.locationContent}>
                                <h3>Antic Caffe</h3>
                                <p>Šenčur</p>
                            </div>
                        </div>

                        {/* Location 3: Kavarna Mause */}
                        <div className={styles.locationCard}>
                            <div className={styles.locationImageWrapper}>
                                <Image src="/images/cafe-mause.png" alt="Kavarna Mause" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div className={styles.locationContent}>
                                <h3>Kavarna Mause</h3>
                                <p>Kranj</p>
                            </div>
                        </div>

                        {/* Location 4: Kavarna M.M. */}
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
            </section>

            {/* Offerings Section */}
            <section className={styles.sectionContainer}>
                <h2 className={styles.sectionTitle}>KAJ VAM NUDIMO</h2>
                <div className={styles.offerGrid}>
                    <Link href="/ponudba" className={styles.offerCard}>
                        <div className={styles.offerImage}>
                            <Image src="/images/hero.png" alt="Torte" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.offerContent}>
                            <h3>Torte</h3>
                        </div>
                    </Link>
                    <Link href="/ponudba" className={styles.offerCard}>
                        <div className={styles.offerImage}>
                            <Image src="/images/cookies.png" alt="Domači piškoti" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.offerContent}>
                            <h3>Domači Piškoti</h3>
                        </div>
                    </Link>
                    <Link href="/ponudba" className={styles.offerCard}>
                        <div className={styles.offerImage}>
                            <Image src="/images/macarons.png" alt="Rezine" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.offerContent}>
                            <h3>Rezine</h3>
                        </div>
                    </Link>
                    <Link href="/ponudba" className={styles.offerCard}>
                        <div className={styles.offerImage}>
                            <Image src="/images/wedding-cake.png" alt="Poročne Torte" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.offerContent}>
                            <h3>Poročne Torte</h3>
                        </div>
                    </Link>
                    <Link href="/ponudba" className={styles.offerCard}>
                        <div className={styles.offerImage}>
                            <Image src="/images/cupcakes.png" alt="Sladki Program" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.offerContent}>
                            <h3>Sladki Program</h3>
                        </div>
                    </Link>
                    <Link href="/ponudba" className={styles.offerCard}>
                        <div className={styles.offerImage}>
                            <Image src="/images/about.png" alt="Domači rezanci" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.offerContent}>
                            <h3>Domači Rezanci</h3>
                        </div>
                    </Link>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className={styles.sectionContainer}>
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
            </section>

            {/* Full Contact Form - Embedded */}
            <section className={styles.sectionContainer}>
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
            </section>
        </main>
    );
}
