import React from "react";
import Link from "next/link";

const About = () => {
  const stats = [
    { title: "📍 Venue", value: "Computer Labs of GUB", isNumber: false },
    { title: "Participants", value: "200+", isNumber: true },
    { title: "Spectators", value: "1,000+", isNumber: true },
  ];

  return (
    <section
      id="about"
      className="py-8 mt-8 relative rounded-3xl shadow-xl bg-gradient-to-br from-gray-50 via-white to-gray-200"
    >
      {/* Floating Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>


      <div className="relative z-10 max-w-6xl md:mx-auto mx-2 text-left md:text-left sm:my-16 md:my-16">
        <h2 className="text-4xl font-bold mb-6 text-black">
          About GUB IDPC 2025
        </h2>
        <p className="sm:text-lg md:text-lg mb-8 text-sm px-2 text-black">
          GUB IDPC 2025 is the premier inter-department programming contest
          hosted by the Green University Competitive Programming Arena (GUBCPA).
          It brings together the brightest minds from Green University to
          showcase their programming skills. The contest is open to all
          undergraduate students, with teams of three collaborating under a
          faculty mentor.
          <br />
          <br />
          <b>Students from any department can participate</b> and
          take part in this exciting challenge. Join us to make GUB IDPC 2025 an
          unforgettable experience!
        </p>
        <hr className="border-gray-300 mb-6" />
        <p className="font-semibold px-2 text-black">
          “Organized by -{" "}
          <Link
            href="https://facebook.com/gubcpa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Green University Competitive Programming Arena (GUBCPA)
          </Link>
          ”
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto px-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg flex flex-col justify-center items-center text-center bg-white bg-opacity-60 backdrop-blur-md text-gray-800 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              {stat.isNumber ? (
                <>
                  <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
                    {stat.value}
                  </span>
                  <span className="text-black text-sm font-medium">
                    {stat.title}
                  </span>
                </>
              ) : (
                <>
                  <div className="text-lg font-bold text-black">
                    {stat.title}
                  </div>
                  <div className="text-sm font-medium text-black">
                    {stat.value}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
