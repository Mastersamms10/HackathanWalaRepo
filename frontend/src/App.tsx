import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import InfoSection from './components/InfoSection';
import PreviousCamps from './components/PreviousCamps';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="flex">
        <main className="flex-1">
          <HeroSection />
          <InfoSection />
          <PreviousCamps />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;