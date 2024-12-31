import React from 'react';
import { Sparkles } from 'lucide-react';
import Firework from './components/Firework';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Firework />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-yellow-400 mb-4 mx-auto" />
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
            2025
          </h1>
          <p className="text-2xl md:text-3xl text-white font-light mb-12">
            Countdown to the New Year
          </p>
        </div>

        <Countdown />

        <div className="mt-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            A New Beginning Awaits
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Let's welcome 2025 with joy, hope, and endless possibilities.
            May this year bring prosperity, happiness, and success to all.
          </p>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
    </div>
  );
}

export default App;