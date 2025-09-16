import React from 'react';
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import PreviousCamps from './PreviousCamps';
import Footer from './Footer';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const hasLoadedBefore = localStorage.getItem('hasLoaded')
    if (hasLoadedBefore) {
      setIsLoading(false)
    }
  }, [])

  const loadCount = 0;
  const handleLoadingComplete = () => {
    if(loadCount > 0) 
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <InfoSection />
        <PreviousCamps />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;