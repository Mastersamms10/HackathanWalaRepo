import React from 'react';
import { Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
          <Activity className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">City General Hospital</h1>
          <p className="text-sm text-gray-500">Blood Bank Management</p>
        </div>
      </div>
    </header>
  );
};

export default Header;