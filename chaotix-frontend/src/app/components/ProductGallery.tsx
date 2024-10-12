"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // Adjust the import path
import { fetchProducts, Product } from '../utils/api'; // Adjust the import path
import styles from './ProductGallery.module.css';

const ProductGallery: React.FC = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productList = await fetchProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className={styles.gallery}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
          <button
            className={styles.button}
            onClick={() =>
              addToCart({
                ...product,
                quantity: 1, // Initialize the quantity field here
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGallery;
