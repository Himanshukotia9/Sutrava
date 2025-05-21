import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const LaunchCountdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center mt-8 mb-12">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">Launching In</h3>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center mb-2 transition-all duration-300">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
                {value.toString().padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 capitalize">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchCountdown;