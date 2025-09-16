import React from 'react';
import { User, Heart, Activity, Settings } from 'lucide-react';

const Sidebar = () => {
  // Mock user data - in real app this would come from auth context
  const user = {
    name: "John Doe",
    bloodGroup: "O+",
    isAvailable: true,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  };

  const isLoggedIn = true; // This would come from auth state

  return (
    <div className="hidden lg:block w-80 bg-gray-50 min-h-screen sticky top-16">
      <div className="p-6">
        {isLoggedIn ? (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center mb-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-red-100"
              />
              <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
              <div className="flex items-center justify-center mt-2">
                <Heart className="w-5 h-5 text-red-600 mr-2 fill-current" />
                <span className="text-lg font-semibold text-red-600">{user.bloodGroup}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Status</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.isAvailable 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {user.isAvailable ? 'Available' : 'Not Available'}
                </span>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Your Account
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-red-600">12</p>
                  <p className="text-xs text-gray-600">Donations</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">36</p>
                  <p className="text-xs text-gray-600">Lives Saved</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Join RakhtSetu</h3>
            <p className="text-gray-600 text-sm mb-6">Login to your account and start saving lives</p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
              Login to Your Account
            </button>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h4 className="font-bold text-gray-800 mb-4">Today's Impact</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Blood Requests</span>
              <span className="font-semibold text-red-600">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Active Donors</span>
              <span className="font-semibold text-green-600">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Lives Saved Today</span>
              <span className="font-semibold text-blue-600">72</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;