'use client';

import { useState, useMemo } from 'react';
import { allProducts, categories, CategoryId } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

export default function Ponudba() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
    const [sortBy, setSortBy] = useState<SortOption>('name-asc');

    const filteredAndSortedProducts = useMemo(() => {
        let products = [...allProducts];

        // Filter by category
        if (selectedCategory !== 'all') {
            products = products.filter(p => p.category === selectedCategory);
        }

        // Sort
        products.sort((a, b) => {
            switch (sortBy) {
                case 'name-asc':
                    return a.name.localeCompare(b.name, 'sl');
                case 'name-desc':
                    return b.name.localeCompare(a.name, 'sl');
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

        return products;
    }, [selectedCategory, sortBy]);

    return (
        <main className={styles.main}>
            {/* Hero */}
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Naša Ponudba</h1>
                <p className={styles.heroSubtitle}>Odkrijte naše sladke kreacije</p>
            </section>

            <div className={styles.shopContainer}>
                {/* Sidebar Filters */}
                <aside className={styles.sidebar}>
                    <div className={styles.filterSection}>
                        <h3>Kategorije</h3>
                        <ul className={styles.categoryList}>
                            <li>
                                <button
                                    className={selectedCategory === 'all' ? styles.active : ''}
                                    onClick={() => setSelectedCategory('all')}
                                >
                                    Vse ({allProducts.length})
                                </button>
                            </li>
                            {categories.map(cat => (
                                <li key={cat.id}>
                                    <button
                                        className={selectedCategory === cat.id ? styles.active : ''}
                                        onClick={() => setSelectedCategory(cat.id)}
                                    >
                                        {cat.name} ({allProducts.filter(p => p.category === cat.id).length})
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <div className={styles.mainContent}>
                    {/* Toolbar */}
                    <div className={styles.toolbar}>
                        <span className={styles.resultCount}>
                            {filteredAndSortedProducts.length} izdelkov
                        </span>
                        <div className={styles.sortWrapper}>
                            <label htmlFor="sort">Razvrsti:</label>
                            <select
                                id="sort"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className={styles.sortSelect}
                            >
                                <option value="name-asc">Ime (A-Ž)</option>
                                <option value="name-desc">Ime (Ž-A)</option>
                                <option value="price-asc">Cena (nizka-visoka)</option>
                                <option value="price-desc">Cena (visoka-nizka)</option>
                            </select>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className={styles.productGrid}>
                        {filteredAndSortedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {filteredAndSortedProducts.length === 0 && (
                        <div className={styles.noResults}>
                            <p>Ni najdenih izdelkov za izbrane filtre.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
