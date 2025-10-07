
"use client";

import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const targetDate = new Date('2025-10-17T00:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return false;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      return true;
    };
    
    if (calculateTimeLeft()) {
        const interval = setInterval(() => {
            if (!calculateTimeLeft()) {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }
  }, []);

  const renderPlaceholder = () => (
    <div className="flex justify-center gap-4 sm:gap-8">
        <div className="text-center w-24"><div className="text-4xl sm:text-6xl font-bold font-headline">--</div><div className="text-sm uppercase tracking-widest mt-2">Days</div></div>
        <div className="text-center w-24"><div className="text-4xl sm:text-6xl font-bold font-headline">--</div><div className="text-sm uppercase tracking-widest mt-2">Hours</div></div>
        <div className="text-center w-24"><div className="text-4xl sm:text-6xl font-bold font-headline">--</div><div className="text-sm uppercase tracking-widest mt-2">Minutes</div></div>
        <div className="text-center w-24"><div className="text-4xl sm:text-6xl font-bold font-headline">--</div><div className="text-sm uppercase tracking-widest mt-2">Seconds</div></div>
    </div>
  )
  
  if (!isClient) {
    return renderPlaceholder();
  }

  return (
    <div className="flex justify-center gap-4 sm:gap-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center w-24">
          <div className="text-4xl sm:text-6xl font-bold font-headline">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-sm uppercase tracking-widest mt-2">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
