import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950 transition-colors duration-500"></div>
      
      {/* Animated shapes */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-blob"></div>
      <div className="hidden sm:block absolute top-3/4 left-1/3 w-72 h-72 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default BackgroundAnimation;