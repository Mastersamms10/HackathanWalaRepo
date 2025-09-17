import { Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-red-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/image.png" 
                alt="RakhtSetu Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Connecting blood donors with those in need. Building a community of life-savers 
              across India, one donation at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a href="mailto:rakhtsetu@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  rakhtsetu@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 p-4 bg-red-600 bg-opacity-20 border border-red-400 rounded-lg">
          <div className="flex items-center justify-center space-x-4">
            <Heart className="w-6 h-6 text-red-400 fill-current animate-pulse" />
            <p className="text-center font-medium">
              <span className="text-red-400 font-bold">Emergency?</span> Call our 24/7 helpline: 
              <a href="tel:+919876543210" className="font-bold text-white ml-2 hover:underline">
                +91 98765 43210
              </a>
            </p>
            <Heart className="w-6 h-6 text-red-400 fill-current animate-pulse" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 RakhtSetu. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#support" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-6 p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">10,247</p>
              <p className="text-red-100 text-sm">Total Donations</p>
            </div>
            <div>
              <p className="text-2xl font-bold">30,741</p>
              <p className="text-red-100 text-sm">Lives Saved</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5,126</p>
              <p className="text-red-100 text-sm">Active Donors</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;