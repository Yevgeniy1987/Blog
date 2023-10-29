'use client';

import { useEffect, useState } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return <p className="text-sm">{seconds} seconds</p>;
};
