import { useEffect, useState } from 'react';
import BloodRequestModal from './BloodRequestModal';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [
    {
      image: "/public/1.jpg",
      alt: "Doctor treating patient with blood donor in background"
    },
    {
      image: "/public/2.jpg",
      alt: "Young people donating blood"
    },
    {
      image: "/public/3.jpg",
      alt: "Emergency hospital scenario"
    },
    {
      image: "/public/4.jpg",
      alt: "Smiling recovered patient"
    },
    {
      image: "/public/5.jpg",
      alt: "Blood donation camp photo"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen mt-16 overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      
      
      {/* Center Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
            Save Lives, Give Blood
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 drop-shadow-lg max-w-2xl mx-auto px-4">
            Every donation can save up to 3 lives. Be a hero in someone's story.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-red-700 hover:bg-red-800 text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-red-500/50"
          >
            Emergency Blood Request– RakhtSetu
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
      
      <BloodRequestModal
  key={isModalOpen ? 'open' : 'closed'} // forces remount
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>

    </div>
  );
};

export default HeroSection;