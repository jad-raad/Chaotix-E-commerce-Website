"use client"; // This line makes this file a Client Component

import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Adjust the import path
import styles from './Checkout.module.css'; // Create a new CSS module for styling

const Checkout = () => {
    const { cart, getCartTotal } = useCart(); // Access cart and total
    const totalAmount = getCartTotal();

    // State to manage payment method
    const [paymentMethod, setPaymentMethod] = useState<string>('cash'); // Default to cash

    const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement checkout logic here (e.g., call an API)
        alert("Checkout process started!"); // Placeholder action
    };

    return (
        <div className={styles.checkoutPage}>
            <h1>Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. Please add items to your cart.</p>
            ) : (
                <form onSubmit={handleCheckout}>
                    <div className={styles.userInfo}>
                        <h2>Shipping Information</h2>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="address">Address:</label>
                            <input type="text" id="address" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" required />
                        </div>
                    </div>

                    <div className={styles.paymentInfo}>
                        <h2>Payment Information</h2>
                        <h3>Payment Method:</h3>
                        <div className={styles.paymentOptions}>
                            <label>
                                <input 
                                    type="radio" 
                                    value="cash" 
                                    checked={paymentMethod === 'cash'} 
                                    onChange={() => setPaymentMethod('cash')} 
                                />
                                Cash on Delivery
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    value="visa" 
                                    checked={paymentMethod === 'visa'} 
                                    onChange={() => setPaymentMethod('visa')} 
                                />
                                Visa
                            </label>
                        </div>

                        {/* Show credit card fields only if Visa is selected */}
                        {paymentMethod === 'visa' && (
                            <div className={styles.formGroup}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="cardNumber">Credit Card Number:</label>
                                    <input type="text" id="cardNumber" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
                                    <input type="text" id="expiryDate" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="cvv">CVV:</label>
                                    <input type="text" id="cvv" required />
                                </div>
                            </div>
                        )}
                    </div>

                    <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    <button type="submit" className={styles.checkoutButton}>Complete Purchase</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;
