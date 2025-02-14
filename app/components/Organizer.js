import Image from "next/image";
import gucpa from "../../public/Images/gubcpa.png";
import Link from "next/link";

const Organizer = () => {
  return (
    <section
      id="about"
      className="py-8 mt-16 relative rounded-3xl shadow-xl bg-gradient-to-br from-gray-50 via-white to-gray-200"
    >
       {/* Floating Gradient Circles */}
       <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 sm:my-16 md:my-16">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            The Event Organizer
          </h2>
          <p className="mt-4 sm:text-lg md:text-lg text-sm text-gray-700">
            GUBCPA aims to provide students with opportunities to enhance their
            coding skills, participate in competitive programming contests, and
            engage in collaborative learning experiences.
          </p>
          <Link
            href="/AboutGUBCPA"
            className="hover:text-yellow-400 text-yellow-500 mt-6 inline-flex items-center font-semibold hover:underline"
          >
            Learn More About GUBCPA
            <span className="ml-2">➡</span>
          </Link>
        </div>

        {/* Right Image & Info Box */}
        <div className="md:w-1/2 relative flex flex-col items-center border-2 border-white rounded-2xl p-3 sm:p-12 shadow-xl">
          {/* Club Logo/Image */}
          <div className="w-56 h-56 sm:w-64 sm:h-64 bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out">
            <Image
              src={gucpa}
              alt="GUB IDPC Logo"
              width={600}
              height={400}
              className="w-full h-full object-cover border border-gray-300 rounded-2xl"
            />
          </div>
          {/* Info Box */}
          <div className="w-72 bg-yellow-500 rounded-2xl shadow-2xl p-6 sm:absolute bottom-0 md:-bottom-10 right-0 sm:right-6 border border-gray-300 transform md:translate-x-14 md:translate-y-32">
            <h3 className="text-xl font-bold text-gray-800">
              Green University Competitive Programming Arena
            </h3>
            <p className="mt-2 text-gray-700 text-sm">
              Over the years, we have hosted multiple programming contests,
              workshops, and competitive events to enhance the problem-solving
              skills of students at GUB.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizer;
