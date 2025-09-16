import React, { useState } from 'react';
import { ChevronDown, Heart, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/image.png" 
              alt="RakhtSetu Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-700 hover:underline transition-colors font-medium">
              Home
            </a>
            <a href="#community" className="text-gray-700 hover:text-red-700 hover:underline transition-colors font-medium">
              Community
            </a>
            <a href="#services" className="text-gray-700 hover:text-red-700 hover:underline transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-700 hover:underline transition-colors font-medium">
              About Us
            </a>
            
            {/* Login Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-700 font-medium transition-colors"
              >
                <span>Login</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border">
                  <a href="#donor-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700">
                    Donor
                  </a>
                  <a href="#patient-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700">
                    Patient
                  </a>
                  <a href="#hospital-login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700">
                    Hospital
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50">
                Home
              </a>
              <a href="#community" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50">
                Community
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50">
                About Us
              </a>
              <div className="border-t pt-2">
                <p className="px-3 py-1 text-sm font-medium text-gray-500">Login as:</p>
                <a href="#donor-login" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50">
                  Donor
                </a>
                <a href="#patient-login" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50">
                  Patient
                </a>
                <a href="#hospital-login" className="block px-3 py-2 text-gray-700 hover:text-red-700 hover:bg-red-50">
                  Hospital
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;