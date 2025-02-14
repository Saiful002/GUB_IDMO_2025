"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-02-28T10:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-br from-gray-50 via-white to-gray-200 mt-16">
       {/* Floating Gradient Circles */}
       <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>

      {/* Glassmorphism Background Layer */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-3xl shadow-lg"></div>

      {/* Countdown Content */}
      <div className="relative z-10 max-w-6xl flex flex-col items-center justify-center space-y-8">
        <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight text-center text-gray-900">
          Countdown
        </h3>

        <div className="flex justify-center sm:space-x-4 md:space-x-6 flex-nowrap">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
            <div
              key={label}
              className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg shadow-xl w-20 sm:w-24 md:w-32 h-32 flex flex-col items-center justify-center text-center transform transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
                {String(Object.values(timeLeft)[index]).padStart(2, "0")}
              </span>
              <div className="text-xs sm:text-sm md:text-base mt-2 text-gray-800">
                {label}
              </div>
            </div>
          ))}
        </div>

        <p className="sm:text-lg md:text-lg text-sm max-w-xl mx-auto md:mx-0 mt-6 text-center text-gray-900">
          Don’t miss out on the opportunity to be part of the most exciting
          programming competition of the year. Time is ticking!
        </p>
      </div>
    </section>
  );
};

export default Countdown;
