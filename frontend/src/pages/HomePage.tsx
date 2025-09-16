import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import PreviousCamps from '../components/PreviousCamps';
import Footer from '../components/Footer';
import { Home } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="flex">
        <main className="flex-1">
          <HeroSection />
          <InfoSection />
          <PreviousCamps />
        </main>
      
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;