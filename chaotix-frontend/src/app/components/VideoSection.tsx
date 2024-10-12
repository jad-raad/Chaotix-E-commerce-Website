import React from 'react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
    return (
        <div className={styles.videoSection}>
            <h2>Watch Our Story</h2>
            <iframe 
                src="https://www.youtube.com/embed/2_gGJY1GhpQ?si=uCz5Yd7l6GWdtlIO" 
                className={styles.videoIframe}
                title="Your Video"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoSection;
