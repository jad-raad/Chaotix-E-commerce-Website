import React from 'react';
import styles from './FeaturedProducts.module.css';

const products = [
    { id: 1, name: 'Cap', price: 19.99, image: '/assets/cap.png' },
    { id: 2, name: 'Hoodie', price: 49.99, image: '/assets/Hoodie.png' },
    { id: 3, name: 'Jacket', price: 69.99, image: '/assets/Jacket.png' },
    { id: 4, name: 'Sweater', price: 39.99, image: '/assets/Sweater.png' },
    { id: 5, name: 'Sweatpants', price: 29.99, image: '/assets/Sweatpants.png' },
];

const FeaturedProducts = () => {
    return (
        <div className={styles.featuredProducts}>
            <h2>Featured Products</h2>
            <div className={styles.productList}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        <img src={product.image} alt={product.name} className={styles.productImage} />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
