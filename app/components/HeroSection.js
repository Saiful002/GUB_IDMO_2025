import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center sm:px-16 md:px-16 px-6 py-16 my-8
      bg-gradient-to-br from-gray-50 via-white to-gray-200 overflow-hidden"
    >
      {/* Floating Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-3xl space-y-6 p-10 rounded-2xl bg-white/30 backdrop-blur-md shadow-xl">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 text-center">
          GUB Inter Department <br />
          <span className="text-yellow-500 text-5xl font-extrabold animate-pulse">
            Programming Contest
          </span>{" "}
          <br />
          <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
            2025
          </span>
        </h2>
        <p className="sm:text-lg md:text-lg text-base font-medium text-gray-800 text-center">
          Get ready to showcase your programming skills in the most prestigious
          contest of the year. Join the best minds and compete for glory!
        </p>

        {/* Contest Dates */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-4 bg-yellow-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <FaCalendarAlt className="text-yellow-500 text-2xl" />
            <Link
              href="/EventSchedule"
              className="text-lg font-semibold text-gray-800"
            >
              Mock Contest: <span className="font-bold">27 February 2025</span>
            </Link>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-yellow-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <MdOutlineEmojiEvents className="text-yellow-700 text-2xl" />
            <p className="text-lg font-semibold text-gray-800">
              Main Contest: <span className="font-bold">28 February 2025</span>
            </p>
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <Link
            href="/Register"
            className="mt-6 px-8 py-4 rounded-xl font-semibold shadow-lg border border-yellow/50
            bg-yellow-300 backdrop-blur-lg text-gray-900 hover:bg-yellow-400 hover:scale-105
            hover:shadow-xl hover:border-yellow-500 transition-all duration-300"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
