"use client";

import React from 'react';
import { useCart } from '../context/CartContext'; // Ensure correct import path
import styles from './Cart.module.css';
import Link from 'next/link';
const CartPage = () => {
  const { cart, removeFromCart, getCartTotal } = useCart();

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.name} className={styles.cartItemImage} /> {/* Display the product image */}
              <div className={styles.cartItemDetails}>
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>Remove</button>
            </div>
          ))}
          <h3>Total: ${getCartTotal().toFixed(2)}</h3>
        </div>
      )}
      <a href="/products" className={styles.continueShopping}>Continue Shopping</a>

      <h3>Total: ${getCartTotal().toFixed(2)}</h3>
          <Link href="/checkout">
            <button className={styles.checkoutButton}>Proceed to Checkout</button>
          </Link>
    </div>
  );
};

export default CartPage;
