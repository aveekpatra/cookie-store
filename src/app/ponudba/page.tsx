import Image from 'next/image';
import styles from './page.module.css';

const products = [
    { id: 1, name: 'Poročne Torte', description: 'Elegantne in nepozabne.', image: '/images/hero.png' },
    { id: 2, name: 'Macarons', description: 'Francoska eleganca.', image: '/images/macarons.png' },
    { id: 3, name: 'Piškoti', description: 'Občutek domačnosti.', image: '/images/cookies.png' },
    { id: 4, name: 'Cupcakes', description: 'Majhni užitki.', image: '/images/cupcakes.png' },
    { id: 5, name: 'Sadne Torte', description: 'Svežina narave.', image: '/images/hero.png' }, // reusing hero as placeholder for fruit cake
    { id: 6, name: 'Čokoladne Sanje', description: 'Za ljubitelje kakava.', image: '/images/cookies.png' },
];

export default function Ponudba() {
    return (
        <main className={styles.container}>
            <h1 className="font-script" style={{ textAlign: 'center', fontSize: '4rem', color: 'var(--primary-red)', margin: '4rem 0 2rem' }}>Naša Ponudba</h1>
            <p className={styles.intro}>
                Odkrijte našo paleto ročno izdelanih slaščic. Vsak kos je ustvarjen z ljubeznijo in natančnostjo.
            </p>

            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.productTitle}>{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
