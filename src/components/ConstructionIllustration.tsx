import React from 'react';

const ConstructionIllustration: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-2">
      <img 
        src=".\code_development.svg" 
        alt="Under Construction" 
        className="size-80 text-blue-600 dark:text-blue-400"
      />
    </div>
  );
};

export default ConstructionIllustration;