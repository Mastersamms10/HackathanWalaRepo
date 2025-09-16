import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Heart, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Award,
  Activity,
  Bell
} from 'lucide-react';

interface DonorStats {
  totalDonations: number;
  lastDonation: string;
  nextEligible: string;
  bloodType: string;
}

const DashboardDon: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  const donorStats: DonorStats = {
    totalDonations: 12,
    lastDonation: "December 15, 2024",
    nextEligible: "February 15, 2025",
    bloodType: "O+"
  };

  const recentDonations = [
    { date: "Dec 15, 2024", location: "City Medical Center", type: "Whole Blood" },
    { date: "Oct 20, 2024", location: "Community Health Drive", type: "Platelets" },
    { date: "Aug 25, 2024", location: "Red Cross Center", type: "Whole Blood" }
  ];

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">DonorHub</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
              <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, Sarah!</h2>
          <p className="text-slate-600">Manage your donation availability and track your impact.</p>
        </div>

        {/* Availability Toggle Card */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                isAvailable ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <Activity className={`w-6 h-6 transition-colors ${
                  isAvailable ? 'text-green-600' : 'text-red-600'
                }`} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Donation Availability</h3>
                <p className="text-slate-600">
                  You are currently {isAvailable ? 'available' : 'unavailable'} for donations
                </p>
              </div>
            </div>
            <button
              onClick={toggleAvailability}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAvailable ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAvailable ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          {!isAvailable && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-800 text-sm">
                You're currently marked as unavailable. Remember to update your status when you're ready to donate again!
              </p>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Total Donations</p>
                <p className="text-3xl font-bold text-slate-900">{donorStats.totalDonations}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Blood Type</p>
                <p className="text-3xl font-bold text-slate-900">{donorStats.bloodType}</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Last Donation</p>
                <p className="text-lg font-semibold text-slate-900">{donorStats.lastDonation}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Next Eligible</p>
                <p className="text-lg font-semibold text-slate-900">{donorStats.nextEligible}</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Donations */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Recent Donations</h3>
            <div className="space-y-4">
              {recentDonations.map((donation, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{donation.type}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-slate-600">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{donation.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{donation.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Schedule Appointment</span>
              </button>
              <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <User className="w-5 h-5" />
                <span>Update Profile</span>
              </button>
              <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Find Locations</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Emergency Contact</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>help@donorhub.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardDon;