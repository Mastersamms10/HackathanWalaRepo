import { Activity, Ban, Calendar, Droplet, Heart, Scale, Shield, Users } from 'lucide-react';

const InfoSection = () => {
  const eligibilityCards = [
    {
      icon: <Calendar className="w-8 h-8 text-red-600" />,
      title: "Age 18-65 years",
      description: "Ideal age range for safe blood donation"
    },
    {
      icon: <Scale className="w-8 h-8 text-red-600" />,
      title: "Weight >50kg",
      description: "Minimum weight requirement for donation"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Good Health",
      description: "Overall good health condition required"
    },
    {
      icon: <Activity className="w-8 h-8 text-red-600" />,
      title: "No Major Illness",
      description: "No major illness in past 6 months"
    },
    {
      icon: <Ban className="w-8 h-8 text-red-600" />,
      title: "Alcohol Free",
      description: "Non-alcoholic before 24 hours"
    }
  ];

  const benefits = [
    "Every donation can save 3 lives",
    "Helps maintain hospital blood supply",
    "Good for your own health (stimulates blood cell production)",
    "Builds a life-saving community",
    "Regular health checkups included",
    "Join a network of heroes"
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who Can Donate Blood */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Who Can Donate Blood?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check if you're eligible to become a life-saving blood donor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eligibilityCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-red-50 p-3 rounded-full mr-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                </div>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Donate Blood */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Donate Blood?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your donation makes a difference in countless lives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/public/2.jpg"
                alt="Blood donor helping patient"
                className="rounded-xl shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-full flex-shrink-0">
                    <Heart className="w-5 h-5 text-red-600 fill-current" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
              
              <div className="mt-8">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Start Donating Today
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mt-16 bg-red-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Droplet className="w-12 h-12 mx-auto mb-4 fill-current" />
              <p className="text-3xl font-bold mb-2">10,000+</p>
              <p className="text-red-100">Units Donated</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <p className="text-3xl font-bold mb-2">5,000+</p>
              <p className="text-red-100">Active Donors</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 fill-current" />
              <p className="text-3xl font-bold mb-2">30,000+</p>
              <p className="text-red-100">Lives Saved</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <p className="text-3xl font-bold mb-2">200+</p>
              <p className="text-red-100">Partner Hospitals</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoSection;