import React from 'react';
import Logo from './components/Logo';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import BackgroundAnimation from './components/BackgroundAnimation';
import LaunchCountdown from './components/LaunchCountdown';
import ConstructionIllustration from './components/ConstructionIllustration';

function App() {
  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <div className="min-h-screen relative flex flex-col transition-colors duration-500">
      <BackgroundAnimation />
      
      <header className="w-full p-6 flex justify-between items-center z-10">
        <Logo size={36} />
        <ThemeToggle />
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-16 max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Something Amazing Is Coming
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're working hard to bring you an exceptional experience. 
            Our new website is under construction and will be ready soon.
          </p>
        </div>
        <ConstructionIllustration />
        
        <div className="w-full max-w-md animate-slideUp">
          <ContactForm />
        </div>
      </main>
      
      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 z-10">
        <p>© {new Date().getFullYear()} Suthrava. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;