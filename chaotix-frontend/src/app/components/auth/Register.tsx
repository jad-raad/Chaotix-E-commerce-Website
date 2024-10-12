"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Auth.module.css';
import axios from 'axios'; // Make sure this line is present
import { registerUser, User, RegisterResponse } from '../../utils/api'; // Adjust the import path

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>(''); // Assuming you want to include email
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const user: User = { username, password }; // Create the user object
            const result: RegisterResponse = await registerUser(user);
            setMessage(result.msg || 'User registered successfully!');
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                setMessage(error.response.data.detail || 'Error during registration.');
            } else {
                setMessage('Error during registration.');
            }
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>Register</h2>
                <form className={styles.authForm} onSubmit={handleRegister}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className={styles.inputField} placeholder="Enter your username" required 
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className={styles.inputField} placeholder="Enter your email" required 
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className={styles.inputField} placeholder="Create a password" required 
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className={styles.submitButton}>Register</button>
                </form>
                {message && <p>{message}</p>}
                <p className={styles.switchAuth}>
                    Already have an account? <Link href="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
