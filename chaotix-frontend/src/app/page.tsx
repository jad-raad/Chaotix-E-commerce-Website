import React from 'react';
import HeroBanner from './components/HeroBanner';
import CallToAction from './components/CallToAction';
import VideoSection from './components/VideoSection';
import FeaturedProducts from './components/FeaturedProducts';

const Home = () => {
    return (
        <div>
        
            <HeroBanner />
            <FeaturedProducts />
            <CallToAction />
            <VideoSection />
        </div>
    );
};

export default Home;
