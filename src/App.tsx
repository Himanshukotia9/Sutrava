import React from 'react';
import Logo from './components/Logo';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import BackgroundAnimation from './components/BackgroundAnimation';
import LaunchCountdown from './components/LaunchCountdown';
import ConstructionIllustration from './components/ConstructionIllustration';
import { Mail } from 'lucide-react';

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
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-2 max-w-6xl mx-auto w-full">
        <div className="text-center animate-fadeIn">
          <p className="text-lg font-semibold md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Big ideas need bold foundations. We’re building something exceptional behind the scenes — a platform where innovation meets impact. Stay tuned. You’ll want to be part of this.
          </p>
        </div>
        <ConstructionIllustration />
        
        <a 
          href="mailto:info@suthrava.com"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 animate-slideUp"
        >
          <div className=''>
            <div className='flex space-x-2 items-center'>
              <Mail size={20} />
              <span>Contact Us</span>
            </div>
            <span>info@sutrava.com</span>
          </div>
        </a>
      </main>
      
      <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 z-10">
        <p>© {new Date().getFullYear()} Suthrava. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;