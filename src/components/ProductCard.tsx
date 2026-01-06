'use client';

import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                {product.description && (
                    <p className={styles.description}>{product.description}</p>
                )}
                <div className={styles.footer}>
                    <span className={styles.price}>€{product.price.toFixed(2)}</span>
                    <button
                        className={styles.addBtn}
                        onClick={() => addToCart(product)}
                    >
                        + V košarico
                    </button>
                </div>
            </div>
        </div>
    );
}
