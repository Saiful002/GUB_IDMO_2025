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
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300 opacity-40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-30 rounded-full blur-3xl"></div>

      {/* Centeindigo Content */}
      <div className="relative z-10 w-full max-w-3xl space-y-6 p-10 rounded-2xl bg-white/30 backdrop-blur-md shadow-xl">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 text-center">
          GUB Inter Department <br />
          <span className="text-indigo-500 text-5xl font-extrabold animate-pulse">
            Math Olympiad
          </span>{" "}
          <br />
          <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-gray-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text">
            2025
          </span>
        </h2>
        <p className="sm:text-lg md:text-lg text-base font-medium text-gray-800 text-center">
        Prepare to challenge your mathematical skills in the most esteemed competition of the year. The Inter Department Math Olympiad brings together the brightest minds to engage in a battle of logic, problem-solving, and analytical thinking. This is your chance to compete, excel, and earn the recognition you deserve!
        </p>

        {/* Contest Dates */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-4 bg-gradient-to-l from-indigo-300 via-indigo-500 to-indigo-600 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <FaCalendarAlt className="text-white text-2xl" />
            <Link
              href="/EventSchedule"
              className="text-lg font-semibold text-white"
            >
              Mock Contest: <span className="font-bold">27 February 2025</span>
            </Link>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-gradient-to-l from-indigo-300 via-indigo-500 to-indigo-600 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <MdOutlineEmojiEvents className="text-white text-2xl" />
            <p className="text-lg font-semibold text-white">
              Main Contest: <span className="font-bold">28 February 2025</span>
            </p>
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center">
          <Link
            href="/Register"
            className="mt-6 px-8 py-4 rounded-xl font-semibold shadow-lg border border-indigo/50
            bg-indigo-300 backdrop-blur-lg text-gray-900 hover:bg-indigo-400 hover:scale-105
            hover:shadow-xl hover:border-indigo-500 transition-all duration-300"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
