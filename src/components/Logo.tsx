import React from 'react';
import { Gem } from 'lucide-react';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 32, className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Gem 
        size={size} 
        className="text-blue-600 dark:text-blue-400 animate-pulse-slow"
      />
      <span 
        className="font-bold tracking-tight text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
      >
        Suthrava
      </span>
    </div>
  );
};

export default Logo;