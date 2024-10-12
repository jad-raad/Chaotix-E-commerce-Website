import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 Chaotix Clothing. All Rights Reserved.</p>
      <div className={styles.socialLinks}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaInstagram size={24} /> {/* Use the Instagram icon */}
        </a>
        
      </div>
    </footer>
  );
}
