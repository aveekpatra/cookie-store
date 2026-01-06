import Image from 'next/image';
import styles from './page.module.css';

const galleryItems = [
    { id: 1, src: '/images/wedding-cake.png', alt: 'Poročna Torta', span: 'large' },
    { id: 2, src: '/images/macarons.png', alt: 'Macarons', span: 'small' },
    { id: 3, src: '/images/cupcakes.png', alt: 'Cupcakes', span: 'medium' },
    { id: 4, src: '/images/hero.png', alt: 'Slavnostna Torta', span: 'medium' },
    { id: 5, src: '/images/cookies.png', alt: 'Piškoti', span: 'small' },
    { id: 6, src: '/images/wedding-cake.png', alt: 'Detajl Torte', span: 'small' },
];

export default function Galerija() {
    return (
        <main className={styles.container}>
            <h1 className="font-script" style={{ textAlign: 'center', fontSize: '4rem', color: 'var(--primary-red)', margin: '4rem 0 2rem' }}>Galerija Umetnin</h1>
            <p className={styles.intro}>
                Sprehodite se skozi naše sladke kreacije.
            </p>

            <div className={styles.galleryGrid}>
                {galleryItems.map((item, index) => (
                    <div key={item.id} className={`${styles.galleryItem} ${styles[item.span]}`}>
                        <Image src={item.src} alt={item.alt} fill style={{ objectFit: 'cover' }} className={styles.image} />
                        <div className={styles.overlay}>
                            <span>{item.alt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
