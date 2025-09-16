import React from 'react';

interface BloodBucketProps {
  bloodGroup: string;
  units: number;
  maxUnits: number;
  status: 'critical' | 'moderate' | 'sufficient';
}

const BloodBucket: React.FC<BloodBucketProps> = ({ bloodGroup, units, maxUnits, status }) => {
  const fillPercentage = Math.min((units / maxUnits) * 100, 100);
  
  const statusConfig = {
    critical: { color: 'bg-red-500', textColor: 'text-red-700', bgColor: 'bg-red-50', border: 'border-red-200' },
    moderate: { color: 'bg-yellow-500', textColor: 'text-yellow-700', bgColor: 'bg-yellow-50', border: 'border-yellow-200' },
    sufficient: { color: 'bg-green-500', textColor: 'text-green-700', bgColor: 'bg-green-50', border: 'border-green-200' }
  };

  const config = statusConfig[status];

  return (
    <div className={`${config.bgColor} ${config.border} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{bloodGroup}</h3>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${config.textColor} ${config.bgColor}`}>
          {status}
        </div>
      </div>
      
      <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden mb-4">
        <div className="absolute inset-x-0 bottom-0 flex items-end">
          <div 
            className={`w-full ${config.color} transition-all duration-1000 ease-out liquid-fill`}
            style={{ height: `${fillPercentage}%` }}
          >
            <div className="absolute inset-0 animate-pulse opacity-30 bg-white"></div>
          </div>
        </div>
        
        {/* Liquid wave effect */}
        <div 
          className="absolute inset-x-0 w-full opacity-60"
          style={{ 
            bottom: `${fillPercentage}%`,
            height: '10px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'wave 2s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Available:</span>
          <span className="font-bold text-lg text-gray-900">{units} units</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ease-out ${config.color}`}
            style={{ width: `${fillPercentage}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 text-center">
          {fillPercentage.toFixed(1)}% capacity
        </div>
      </div>
    </div>
  );
};

export default BloodBucket;