"use client"; // This line makes this file a Client Component

import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon
import { useUser } from '../context/UserContext'; // Import User Context

export default function Header() {
    const { username, logout } = useUser(); // Get username and logout function

    return (
        <header className={styles.header}>
            <div className="logo">
                <h1><Link href='/'>Chaotix</Link></h1>
            </div>
            <nav className={styles.navbar}>
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
                {username ? ( // Check if the user is logged in
                    <>
                        <span className={styles.welcomeMessage}>Welcome, {username}!</span>
                        <button onClick={logout} className={styles.logoutButton}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link href="/register">Register</Link>
                        <Link href="/login">Login</Link>
                    </>
                )}
                <Link href="/cart"><FaShoppingCart size={24} id='shopcart' /></Link>
            </nav>
        </header>
    );
}
