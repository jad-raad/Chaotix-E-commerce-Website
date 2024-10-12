// src/app/components/HeroBanner.tsx
import React from 'react';
import styles from './HeroBanner.module.css'; // Import the CSS module
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <section className={styles.heroBanner}> {/* Use the local class here */}
      <h1>Welcome to Chaotix</h1>
      <p>Uncage your inner chaos with our bold styles.</p>
      <button><Link href='/products'>Shop Now</Link></button>
    </section>
  );
};

export default HeroBanner;
