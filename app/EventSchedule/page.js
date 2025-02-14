import React from "react";

const EventSchedule = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white flex flex-col space-y-32">
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>
      {/* Event Overview */}
      <section className="max-w-6xl mx-auto px-6 mt-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-left">
          Event Schedule
        </h2>
        <p className="text-lg text-gray-700 text-left">
          The Green University Competitive Programming Arena (GUBCPA) is excited
          to host the GUB Inter Department Programming Contest (IDPC)!, this prestigious event brings together top
          minds from various departments of Green University to showcase their
          programming skills in an intense and competitive environment.
        </p>
      </section>

      {/* Mock & Main Contest Section (Larger Size & White Background) */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Mock Contest */}
        <div className="w-full md:w-1/2 bg-yellow-100 p-10 rounded-lg text-center shadow-lg border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900">Mock Contest</h3>
          <p className="text-xl font-semibold text-gray-700 mt-3">
            February 27, 2025
          </p>
          <p className="text-gray-800 mt-1 text-lg">4:00 PM - 6:00 PM</p>
        </div>

        {/* Main Contest */}
        <div className="w-full md:w-1/2 bg-yellow-200 p-10 rounded-lg text-center shadow-lg border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900">Main Contest</h3>
          <p className="text-xl font-semibold text-gray-700 mt-3">
            February 28, 2025
          </p>
          <p className="text-gray-800 mt-1 text-lg">10:00 AM - 1:00 PM</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 bg-gray-100 flex flex-col items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">Timeline</h2>
        </div>

        {/* Registration & Payment Section */}
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
          {/* Registration */}
          <div className="bg-yellow-100 p-6 shadow-md rounded-lg text-center w-80">
            <h3 className="text-2xl font-bold text-gray-800">Registration</h3>
            <p className="text-lg text-gray-600">13 Feb - 24 Feb</p>
          </div>

          {/* Payment */}
          <div className="bg-yellow-200 p-6 shadow-md rounded-lg text-center w-80">
            <h3 className="text-2xl font-bold text-gray-800">Payment</h3>
            <p className="text-lg text-gray-600">13 Feb - 25 Feb</p>
          </div>
        </div>

        {/* Mock & Main Contest Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-start md:items-center gap-12 bg-yellow-200 p-8 md:mx-32 rounded-lg shadow-lg">
          {/* Mock Contest */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800">
              27 <span className="text-lg font-normal">FEB</span>
            </h3>
            <h4 className="text-xl font-semibold text-gray-800">Mock Contest</h4>

            <div className="text-left relative pl-4 mt-4">
              <div className="mb-6">
                <p className="font-bold text-gray-600 text-lg">
                  10:00 AM - 4:00 PM
                </p>
                <p className="text-gray-600 border-l-4 border-gray-800 pl-3 mt-1">
                  Credential Distribution.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-600 text-lg">
                  4:00 PM - 6:00 PM
                </p>
                <p className="text-gray-600 border-l-4 border-gray-800 pl-3 mt-1">
                  Mock Contest Time.
                </p>
              </div>
            </div>
          </div>

          {/* Main Contest */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800">
              28 <span className="text-lg font-normal">FEB</span>
            </h3>
            <h4 className="text-xl font-semibold text-gray-800">Main Contest</h4>

            <div className="text-left relative pl-4 mt-4">
              <div className="mb-6">
                <p className="font-bold text-gray-600 text-lg">
                  8:30 AM - 8:45 AM
                </p>
                <p className="text-gray-600 border-l-4 border-gray-800 pl-3 mt-1">
                  Reporting Time.
                </p>
              </div>
              <div className="mb-6">
                <p className="font-bold text-gray-600 text-lg">
                  8:45 AM - 9:30 AM
                </p>
                <p className="text-gray-600 border-l-4 border-gray-800 pl-3 mt-1">
                  Kit Distribution.
                </p>
              </div>
              <div className="mb-6">
                <p className="font-bold text-gray-600 text-lg">
                  10:00 AM - 1:00 PM
                </p>
                <p className="text-gray-600 border-l-4 border-gray-800 pl-3 mt-1">
                  Main Contest Time.
                </p>
              </div>
              <div className="mb-6">
                <p className="font-bold text-gray-600 text-lg">
                  2:00 PM - 3:00 PM
                </p>
                <p className="text-gray-600 border-l-4 border-gray-800 pl-3 mt-1">
                  Solution Discussion.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-600 text-lg">
                  3:00 PM - 4:00 PM
                </p>
                <p className="text-gray-600 border-l-4 border-gray-800 pl-3 mt-1">
                  Prize Giving Ceremony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EventSchedule;
