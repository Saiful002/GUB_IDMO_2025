import { FaTrophy } from "react-icons/fa";
import Link from "next/link";

const PrizeCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-br from-gray-50 via-white to-gray-200 mt-16">
       {/* Floating Gradient Circles */}
       <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>

      <div
        className="relative flex items-center justify-center p-10 my-8 mx-auto max-w-lg rounded-2xl 
      bg-gradient-to-br from-gray-50 via-white to-gray-200 shadow-xl overflow-hidden mt-16"
      >
        {/* Floating Gradient Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>

        {/* Glassmorphism Background Layer */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg"></div>

        {/* Prize Pool Content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-4 p-6">
          {/* Trophy Icon */}
          <FaTrophy className="text-yellow-500 text-6xl drop-shadow-md animate-pulse" />

          {/* Prize Text */}
          <h2
            className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r 
          from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text"
          >
            30K+ Prize Pool
          </h2>

          {/* Subtext */}
          <p className="text-lg font-medium text-gray-800">
            Compete and win exciting cash prizes & exclusive goodies!
          </p>

          {/* Details Button */}
          <Link
            href="/PrizePool"
            className="mt-6 px-8 py-4 rounded-xl font-semibold bg-yellow-500 text-white hover:bg-yellow-400 transition-all duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrizeCard;
