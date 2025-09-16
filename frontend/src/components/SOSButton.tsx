import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface SOSButtonProps {
  onClick: () => void;
}

const SOSButton: React.FC<SOSButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full shadow-2xl 
                 flex items-center justify-center text-white font-bold text-lg z-50 
                 transform transition-all duration-200 hover:scale-110 active:scale-95
                 animate-pulse-glow"
    >
      <AlertTriangle className="w-8 h-8" />
      <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-20"></div>
      <div className="absolute inset-0 rounded-full bg-red-600 animate-pulse opacity-40"></div>
    </button>
  );
};

export default SOSButton;