"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Auth.module.css';
import { loginUser, User, LoginResponse } from '../../utils/api'; // Adjust the import path
import { useUser } from '../../context/UserContext'; // Import User Context

const Login: React.FC = () => {
    const { setUsername } = useUser(); // Get setUsername function from context
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const user: User = { username, password }; // Create the user object
            const result: LoginResponse = await loginUser(user);
            localStorage.setItem('token', result.access_token); // Store token for future use
            localStorage.setItem('username', username); // Store username
            setUsername(username); // Set username in context
            setMessage('Login successful!');
        } catch (error) {
            // Handle error
            setMessage('Error during login.');
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>Login</h2>
                <form className={styles.authForm} onSubmit={handleLogin}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className={styles.inputField} placeholder="Enter your username" required
                            value={username} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className={styles.inputField} placeholder="Enter your password" required
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className={styles.submitButton}>Login</button>
                </form>
                {message && <p>{message}</p>}
                <p className={styles.switchAuth}>
                    Don’t have an account? <Link href="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
