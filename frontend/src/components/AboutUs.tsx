import React, { useEffect, useState } from 'react';
import { Heart, Users, Building2, AlertCircle } from 'lucide-react';

const AboutUs: React.FC = () => {
  const [counters, setCounters] = useState({
    donors: 0,
    lives: 0,
    hospitals: 0,
    sos: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const targetValues = {
    donors: 10000,
    lives: 5000,
    hospitals: 120,
    sos: 2500
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const impactSection = document.getElementById('impact-section');
    if (impactSection) {
      observer.observe(impactSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(targetValues).map(key => {
      const target = targetValues[key as keyof typeof targetValues];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      return setInterval(() => {
        step++;
        current = Math.min(Math.floor(increment * step), target);
        
        setCounters(prev => ({
          ...prev,
          [key]: current
        }));

        if (step >= steps) {
          clearInterval(intervals.find(interval => interval === this));
        }
      }, stepDuration);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  const teamMembers = [
    {
      name: "Heet Shah",
      role: "Visionary Leader & Co-Founder",
      description: "Visionary leader with a passion for technology that saves lives. He drives the mission of RakhtSetu to connect donors and patients seamlessly.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Samith Samani",
      role: "Strategic Thinker & Co-Founder",
      description: "Strategic thinker and data expert, ensuring RakhtSetu's real-time reliability and precision in connecting the right donors with patients in need.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Pratham Saiya",
      role: "Creative Designer & Co-Founder",
      description: "Creative designer and problem solver, making the platform intuitive and inclusive for everyone who wants to save lives through blood donation.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Ria Oswal",
      role: "Public Health Advocate & Co-Founder",
      description: "Public health advocate and communicator, building trust and growing our donor community to create a sustainable blood donation ecosystem.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  const impactStats = [
    {
      icon: Users,
      label: "Donors Registered",
      value: counters.donors,
      suffix: "+",
      color: "bg-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      label: "Lives Saved",
      value: counters.lives,
      suffix: "+",
      color: "bg-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Building2,
      label: "Hospital Partners",
      value: counters.hospitals,
      suffix: "+",
      color: "bg-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: AlertCircle,
      label: "SOS Requests Handled",
      value: counters.sos,
      suffix: "+",
      color: "bg-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            About <span className="text-red-200">RakhtSetu</span>
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Connecting hearts, saving lives. We're building India's most trusted platform 
            for blood donation and emergency medical assistance.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our <span className="text-red-600">Founding Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four passionate individuals united by a common mission to revolutionize 
              blood donation and save lives across India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-6">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-red-100"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                        <Heart className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-red-600 font-semibold text-center mb-4 text-sm">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-red-600">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Together, we're making a difference. Here's how RakhtSetu is transforming 
              lives across the nation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`${stat.bgColor} rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {stat.value.toLocaleString()}{stat.suffix}
                  </div>
                  
                  <p className="text-gray-600 font-semibold">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Save Lives?
          </h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            Join thousands of heroes who are making a difference. Your donation 
            could be the gift of life someone desperately needs.
          </p>
          
          <button className="bg-white text-red-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-red-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-gentle">
            <Heart className="w-6 h-6 inline-block mr-3" />
            Join Us – Be a Donor Today
          </button>
          
          <div className="mt-8 flex justify-center space-x-8 text-red-200">
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Safe & Secure</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">Free</div>
              <div className="text-sm">Always Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            <h3 className="text-2xl font-bold">RakhtSetu</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Connecting donors and patients, saving lives every day.
          </p>
          <p className="text-sm text-gray-500">
            © 2024 RakhtSetu. All rights reserved. Made with ❤️ for humanity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;