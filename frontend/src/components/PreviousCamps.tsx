import { ChevronLeft, ChevronRight, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

const PreviousCamps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const camps = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/6129516/pexels-photo-6129516.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Delhi Camp",
      date: "Jan 2024",
      donors: 150,
      description: "Successful blood donation drive at Connaught Place"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Mumbai Camp",
      date: "Feb 2024",
      donors: 200,
      description: "Corporate blood donation event at Business District"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/6129508/pexels-photo-6129508.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Bangalore Camp",
      date: "Mar 2024",
      donors: 180,
      description: "Tech community comes together for a noble cause"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/6129642/pexels-photo-6129642.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Chennai Camp",
      date: "Apr 2024",
      donors: 220,
      description: "University students lead donation initiative"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Pune Camp",
      date: "May 2024",
      donors: 175,
      description: "Community center hosts successful blood drive"
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, camps.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Previous Blood Donation Camps
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the amazing impact of our community-driven blood donation campaigns
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-red-600 hover:bg-red-50 hover:shadow-xl'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex >= maxIndex
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-red-600 hover:bg-red-50 hover:shadow-xl'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Camps Slider */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {camps.map((camp) => (
                <div key={camp.id} className="w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
                    <div className="relative">
                      <img
                        src={camp.image}
                        alt={`${camp.location} - ${camp.date}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {camp.date}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <MapPin className="w-5 h-5 text-red-600 mr-2" />
                        <h3 className="text-xl font-bold text-gray-800">{camp.location}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{camp.description}</p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-green-600 mr-2" />
                          <span className="text-green-600 font-semibold">{camp.donors} Donors</span>
                        </div>
                        <span className="text-blue-600 font-semibold">
                          {camp.donors * 3} Lives Saved
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-red-600 scale-125' : 'bg-gray-300 hover:bg-red-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        
      </div>
    </div>
  );
};

export default PreviousCamps;