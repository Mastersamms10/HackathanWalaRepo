import React, { useState, useEffect } from 'react';
import { X, MapPin, Phone, Clock, Heart, User, Droplet, Star, Filter } from 'lucide-react';

interface BloodRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Donor {
  id: string;
  name: string;
  bloodGroup: string;
  location: string;
  distance: string;
  phone: string;
  lastDonation: string;
  availability: 'available' | 'busy' | 'unavailable';
  rating: number;
  totalDonations: number;
  avatar: string;
}

const BloodRequestModal: React.FC<BloodRequestModalProps> = ({ isOpen, onClose }) => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [donors, setDonors] = useState<Donor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Mock donor data - in real app this would come from backend
  const mockDonors: Donor[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      bloodGroup: 'O+',
      location: 'Connaught Place, Delhi',
      distance: '2.3 km',
      phone: '+91 98765 43210',
      lastDonation: '3 months ago',
      availability: 'available',
      rating: 4.8,
      totalDonations: 12,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      bloodGroup: 'O+',
      location: 'Karol Bagh, Delhi',
      distance: '4.1 km',
      phone: '+91 87654 32109',
      lastDonation: '2 months ago',
      availability: 'available',
      rating: 4.9,
      totalDonations: 18,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '3',
      name: 'Amit Singh',
      bloodGroup: 'O+',
      location: 'Lajpat Nagar, Delhi',
      distance: '5.7 km',
      phone: '+91 76543 21098',
      lastDonation: '1 month ago',
      availability: 'busy',
      rating: 4.7,
      totalDonations: 8,
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '4',
      name: 'Sneha Patel',
      bloodGroup: 'O+',
      location: 'Dwarka, Delhi',
      distance: '8.2 km',
      phone: '+91 65432 10987',
      lastDonation: '4 months ago',
      availability: 'available',
      rating: 4.6,
      totalDonations: 15,
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const locations = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Pune'];

  const handleSearch = () => {
    if (!selectedBloodGroup || !selectedLocation) return;
    
    setIsLoading(true);
    setShowResults(false);
    
    // Simulate API call
    setTimeout(() => {
      setDonors(mockDonors.filter(donor => donor.bloodGroup === selectedBloodGroup));
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'busy': return 'bg-yellow-100 text-yellow-800';
      case 'unavailable': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available': return 'Available Now';
      case 'busy': return 'Busy';
      case 'unavailable': return 'Not Available';
      default: return 'Unknown';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Droplet className="w-8 h-8 fill-current" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Emergency Request Blood</h2>
              <p className="text-red-100">Find donors near you in real-time</p>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {!showResults ? (
            <div className="space-y-6">
              {/* Search Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group Required *
                  </label>
                  <select
                    value={selectedBloodGroup}
                    onChange={(e) => setSelectedBloodGroup(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select Location</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Emergency Info */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-red-600 fill-current flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-1">Emergency Request?</h3>
                    <p className="text-red-700 text-sm">
                      For critical emergencies, call our 24/7 helpline: <strong>+91 98765 43210</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                disabled={!selectedBloodGroup || !selectedLocation || isLoading}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  !selectedBloodGroup || !selectedLocation || isLoading
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 text-white transform hover:scale-105 shadow-lg hover:shadow-red-500/25'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Searching for donors...</span>
                  </div>
                ) : (
                  'Find Donors'
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Results Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Available Donors ({donors.length})
                  </h3>
                  <p className="text-gray-600">
                    {selectedBloodGroup} donors in {selectedLocation}
                  </p>
                </div>
                <button
                  onClick={() => setShowResults(false)}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
                >
                  <Filter className="w-4 h-4" />
                  <span>New Search</span>
                </button>
              </div>

              {/* Donor Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {donors.map((donor) => (
                  <div
                    key={donor.id}
                    className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-red-200"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={donor.avatar}
                        alt={donor.name}
                        className="w-16 h-16 rounded-full border-4 border-red-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-800">{donor.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(donor.availability)}`}>
                            {getAvailabilityText(donor.availability)}
                          </span>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Droplet className="w-4 h-4 text-red-600 fill-current" />
                            <span className="font-semibold text-red-600">{donor.bloodGroup}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span>{donor.location} • {donor.distance}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span>Last donated: {donor.lastDonation}</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span>{donor.rating}</span>
                              <span className="text-gray-400">({donor.totalDonations} donations)</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex space-x-2">
                          <button
                            className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                              donor.availability === 'available'
                                ? 'bg-green-600 hover:bg-green-700 text-white'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={donor.availability !== 'available'}
                          >
                            <Phone className="w-4 h-4 inline mr-1" />
                            Contact
                          </button>
                          <button className="flex-1 py-2 px-4 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium text-sm transition-colors">
                            <User className="w-4 h-4 inline mr-1" />
                            Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {donors.length === 0 && (
                <div className="text-center py-12">
                  <Droplet className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No donors found</h3>
                  <p className="text-gray-500">Try searching in a different location or blood group</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BloodRequestModal;