import React, { useState } from 'react';
import PatientHeader from './PatientHeader';
import PatientSidebar from './PatientSidebar';
import PatientDashboard from './PatientDashboard';
import PatientSOSButton from './PatientSOSButton';

function Patient() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <PatientDashboard />;
      case 'emergency':
        return (
          <div className="flex justify-center items-center min-h-[600px]">
            <PatientSOSButton />
          </div>
        );
      case 'records':
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Records</h2>
            <p className="text-gray-600">Medical records management coming soon...</p>
          </div>
        );
     
      case 'profile':
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Profile</h2>
            <p className="text-gray-600">Profile management coming soon...</p>
          </div>
        );
      default:
        return <PatientDashboard />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <PatientSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="ml-64">
        <PatientHeader />
        <main className="pt-20 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Patient;