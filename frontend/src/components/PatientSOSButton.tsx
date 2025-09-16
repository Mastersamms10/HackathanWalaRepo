import React, { useState } from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import PatientSOSModal from './PatientSOSModal';

export default function PatientSOSButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSOSPress = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={handleSOSPress}
          className="w-32 h-32 rounded-full border-4 bg-red-500 border-red-600 hover:bg-red-600 hover:scale-105 active:scale-95 flex items-center justify-center transition-all duration-300"
        >
          <div className="text-center text-white">
            <Phone className="w-12 h-12 mx-auto mb-2" />
            <span className="text-lg font-bold">SOS</span>
          </div>
        </button>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Contact</h3>
          <p className="text-gray-600 max-w-md text-center">
            Press the SOS button to send an emergency request to emergency services and your emergency contacts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-md">
          <h4 className="font-semibold text-gray-900 mb-4">Emergency Contacts</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Emergency Services</span>
              <span className="font-mono text-blue-600">911</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Primary Care Doctor</span>
              <span className="font-mono text-blue-600">(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Emergency Contact</span>
              <span className="font-mono text-blue-600">(555) 987-6543</span>
            </div>
          </div>
        </div>
      </div>

      <PatientSOSModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}