import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function ONas() {
    return (
        <main className={styles.main}>
            {/* Hero with Image */}
            <section className={styles.hero}>
                <div className={styles.heroImage}>
                    <Image
                        src="/images/interior.png"
                        alt="Slaščičarstvo MM Delavnica"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </div>
                <div className={styles.heroContent}>
                    <h1>O nas</h1>
                    <p>Družinska tradicija od leta 2000</p>
                </div>
            </section>

            {/* Intro Split Section */}
            <section className={styles.splitSection}>
                <div className={styles.splitImage}>
                    <Image
                        src="/images/about.png"
                        alt="Naša zgodba"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.splitContent}>
                    <span className={styles.eyebrow}>Kdo smo</span>
                    <h2>Družinsko podjetje iz Kranja</h2>
                    <p>
                        Slaščičarstvo M.M. smo družinsko podjetje v Čirčah pri Kranju.
                        Že več kot dva desetletja ustvarjamo sladke trenutke za naše stranke.
                    </p>
                    <p>
                        Vsi naši izdelki so izdelani ročno, brez umetnih dodatkov ali aditivov.
                        Naša predanost kakovosti ostaja nespremenjena od prvega dne.
                    </p>
                    <div className={styles.signature}>
                        <strong>Marko Zorman</strong>
                        <span>Ustanovitelj</span>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
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
                    <span className={styles.statNum}>45%</span>
                    <span className={styles.statLabel}>Izvoz</span>
                </div>
            </section>

            {/* Story Section - Reversed */}
            <section className={styles.splitSection + ' ' + styles.reversed}>
                <div className={styles.splitImage}>
                    <Image
                        src="/images/item-cake-wedding.png"
                        alt="Poročna torta"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.splitContent}>
                    <span className={styles.eyebrow}>Naša zgodba</span>
                    <h2>Od garaže do uspešnega podjetja</h2>
                    <p>
                        Marko Zorman se je s peko slaščic začel ukvarjati pri rosnih 15 letih,
                        ko je v domači garaži pekel piškote za lasten zaslužek.
                    </p>
                    <p>
                        1. decembra 2000 je uresničil svoje sanje in odprl lastno slaščičarsko
                        delavnico. Začetki so bili skromni — prva leta sta z ženo Matejo
                        delala sama, zgolj torte po naročilu in piškote.
                    </p>
                    <p>
                        Danes v podjetju dela 25 ljudi, izvažamo v Italijo, Avstrijo,
                        Hrvaško in Bolgarijo.
                    </p>
                </div>
            </section>

            {/* Product Showcase */}
            <section className={styles.showcase}>
                <div className={styles.showcaseHeader}>
                    <span className={styles.eyebrow}>Kaj nudimo</span>
                    <h2>Naši izdelki</h2>
                </div>
                <div className={styles.showcaseGrid}>
                    <div className={styles.showcaseItem}>
                        <Image src="/images/menu-cakes.png" alt="Torte" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.showcaseLabel}>Torte po naročilu</div>
                    </div>
                    <div className={styles.showcaseItem}>
                        <Image src="/images/menu-cookies.png" alt="Piškoti" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.showcaseLabel}>Domači piškoti</div>
                    </div>
                    <div className={styles.showcaseItem}>
                        <Image src="/images/menu-pastries.png" alt="Rezine" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.showcaseLabel}>Rezine in peciva</div>
                    </div>
                    <div className={styles.showcaseItem}>
                        <Image src="/images/menu-pasta.png" alt="Testenine" fill style={{ objectFit: 'cover' }} />
                        <div className={styles.showcaseLabel}>Domače testenine</div>
                    </div>
                </div>
                <Link href="/ponudba" className={styles.showcaseBtn}>
                    Oglejte si celotno ponudbo →
                </Link>
            </section>

            {/* Cafes */}
            <section className={styles.cafes}>
                <div className={styles.cafesHeader}>
                    <span className={styles.eyebrow}>Naše kavarne</span>
                    <h2>Obiščite nas</h2>
                    <p>Štiri lokacije, kjer lahko uživate v naših dobrotah</p>
                </div>
                <div className={styles.cafesGrid}>
                    <div className={styles.cafeCard}>
                        <div className={styles.cafeImage}>
                            <Image src="/images/cafe-katja.png" alt="Kavarna Katja" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Kavarna Katja</h3>
                        <p>Merkur, Kranj</p>
                    </div>
                    <div className={styles.cafeCard}>
                        <div className={styles.cafeImage}>
                            <Image src="/images/antic-caffe.png" alt="Antic Cafe" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Antic Cafe</h3>
                        <p>Šenčur</p>
                    </div>
                    <div className={styles.cafeCard}>
                        <div className={styles.cafeImage}>
                            <Image src="/images/cafe-mause.png" alt="Kavarna Mause" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Kavarna Mause</h3>
                        <p>Planina</p>
                    </div>
                    <div className={styles.cafeCard}>
                        <div className={styles.cafeImage}>
                            <Image src="/images/cafe-mm.png" alt="Kavarna MM" fill style={{ objectFit: 'cover' }} />
                        </div>
                        <h3>Kavarna Krtino</h3>
                        <p>Krtina</p>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className={styles.quoteSection}>
                <blockquote>
                    "Vztrajnost, odločnost in volja do dela so najpomembnejše točke za uspeh."
                </blockquote>
                <cite>— Marko Zorman</cite>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <h2>Stopimo v kontakt</h2>
                <p>Naročite torto za posebno priložnost ali nas obiščite v kavarni</p>
                <Link href="/kontakt" className={styles.ctaBtn}>
                    Kontaktirajte nas
                </Link>
            </section>
        </main>
    );
}
