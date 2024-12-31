import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date('2025-01-01T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 text-white text-center">
      <div className="flex flex-col">
        <span className="text-6xl font-bold">{timeLeft.days}</span>
        <span className="text-xl">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-6xl font-bold">{timeLeft.hours}</span>
        <span className="text-xl">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="text-6xl font-bold">{timeLeft.minutes}</span>
        <span className="text-xl">Minutes</span>
      </div>
      <div className="flex flex-col">
        <span className="text-6xl font-bold">{timeLeft.seconds}</span>
        <span className="text-xl">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;