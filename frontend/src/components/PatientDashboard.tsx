import React from 'react';
import { FileText, Phone } from 'lucide-react';

export default function PatientDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome back, John!</h2>
        <p className="text-blue-100 text-lg">Stay on top of your health with our comprehensive patient portal.</p>
        <div className="flex space-x-4 mt-6">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            View Medical Records
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Emergency Contact
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">12</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Medical Records</h3>
          <p className="text-gray-600 text-sm">Recent lab results available</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <Phone className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-bold text-gray-900">24/7</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Emergency Support</h3>
          <p className="text-gray-600 text-sm">Always available</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">5</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Test Results</h3>
          <p className="text-gray-600 text-sm">Recent results available</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">3</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">Health Reports</h3>
          <p className="text-gray-600 text-sm">Comprehensive health data</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-gray-900">Lab Results Updated</h4>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <p className="text-gray-700">Your recent blood work results are now available</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-gray-900">Health Report Generated</h4>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
              <p className="text-gray-700">Your quarterly health summary is ready for review</p>
            </div>
          </div>
        </div>
        <button className="w-full mt-4 py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          View All Activity
        </button>
      </div>
    </div>
  );
}