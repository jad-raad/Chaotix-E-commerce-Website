import React from 'react';
import styles from './CallToAction.module.css';
import Link from 'next/link';
const CallToAction = () => {
    return (
        <div className={styles.cta}>
            <h2>Join the Chaotix Community</h2>
            <p>Get exclusive offers and updates!</p>
            <button className={styles.ctaButton}><Link href='/register'>Sign Up</Link></button>
        </div>
    );
};

export default CallToAction;
