import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-50 to-red-100 z-50 flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-8">
        <img 
          src="/image.png" 
          alt="RakhtSetu Logo" 
          className="h-20 w-auto animate-pulse"
        />
      </div>

      {/* Test Tube */}
      <div className="test-tube-container mb-8">
        <div className="test-tube">
          <div className="test-tube-top"></div>
          <div className="test-tube-body">
            <div 
              className="blood-fill"
              style={{ height: `${progress}%` }}
            ></div>
            <div className="measurement-lines">
              <div className="line line-25"></div>
              <div className="line line-50"></div>
              <div className="line line-75"></div>
            </div>
          </div>
        </div>
        <div className="test-tube-label">Blood Sample</div>
      </div>

      {/* Progress Bar */}
      <div className="w-80 h-3 bg-red-200 rounded-full mb-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Text */}
      <div className="text-center">
        <p className="text-2xl font-bold text-red-700 mb-2">{progress}%</p>
        <p className="text-red-600 flex items-center">
          <Heart className="w-4 h-4 text-red-500 mr-2 fill-current" />
          Analyzing blood compatibility...
        </p>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .test-tube-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .test-tube {
          position: relative;
          width: 60px;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .test-tube-top {
          width: 20px;
          height: 15px;
          background: linear-gradient(to bottom, #e5e7eb, #d1d5db);
          border-radius: 4px 4px 0 0;
          border: 2px solid #9ca3af;
          margin-bottom: -2px;
          z-index: 2;
        }

        .test-tube-body {
          width: 50px;
          height: 180px;
          background: rgba(255, 255, 255, 0.9);
          border: 3px solid #9ca3af;
          border-radius: 0 0 25px 25px;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .blood-fill {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, #7f1d1d, #dc2626, #ef4444);
          transition: height 0.3s ease-out;
          border-radius: 0 0 22px 22px;
          animation: bloodBubble 2s infinite ease-in-out;
        }

        .measurement-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
        }

        .line {
          position: absolute;
          left: 5px;
          right: 5px;
          height: 1px;
          background: #9ca3af;
          opacity: 0.5;
        }

        .line-25 {
          top: 75%;
        }

        .line-50 {
          top: 50%;
        }

        .line-75 {
          top: 25%;
        }

        .test-tube-label {
          margin-top: 10px;
          font-size: 12px;
          color: #7f1d1d;
          font-weight: 600;
          text-align: center;
        }

        @keyframes bloodBubble {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.02);
          }
        }

        .test-tube-body::before {
          content: '';
          position: absolute;
          top: 10px;
          left: 5px;
          width: 8px;
          height: 60px;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3));
          border-radius: 4px;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;