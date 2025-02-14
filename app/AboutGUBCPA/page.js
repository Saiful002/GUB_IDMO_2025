import Image from "next/image";
import gucpa from "../../public/Images/gubcpa.png";

export default function AboutGUBCPA() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 lg:p-16">
      
      <div className="max-w-7xl mx-auto">
        {/* About GUBCPA */}
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center mt-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-left">
              About GUBCPA
            </h1>
            <p className="mt-4 text-gray-700 text-left max-w-3xl">
              The Green University Competitive Programming Arena (GUBCPA) is a
              dynamic platform dedicated to fostering a culture of
              problem-solving, algorithmic thinking, and teamwork among students
              at Green University. As a hub for programming enthusiasts, GUBCPA
              provides students with opportunities to enhance their coding
              skills, participate in contests, and engage in collaborative
              learning.
              <br />
              <br />
              GUBCPA organizes workshops, training sessions, and competitions to
              refine problem-solving skills and prepare students for national
              and international programming contests. By bringing together
              talented minds, the arena promotes knowledge sharing, critical
              thinking, and a passion for programming.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={gucpa}
              alt="GUBCPA Logo"
              width={500}
              height={500}
              className="rounded-lg shadow-xl shadow-yellow-300"
            />
          </div>
        </div>

        {/* Running Sessions */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Running Sessions
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Advanced Batch */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 rounded-lg shadow-lg text-white text-center">
              <h3 className="text-2xl font-semibold">Advanced Batch</h3>
              <p className="mt-2 text-lg">
                Focused on ICPC-style problem-solving, advanced algorithms, and
                competitive programming techniques.
              </p>
            </div>

            {/* Beginner Batch */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-8 rounded-lg shadow-lg text-white text-center">
              <h3 className="text-2xl font-semibold">Beginner Batch</h3>
              <p className="mt-2 text-lg">
                A structured introduction to data structures, algorithms, and
                problem-solving techniques.
              </p>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Mentors
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {/* Mazed Hasan Parag */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg flex items-center gap-6">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                M
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Mazed Hasan Parag
                </h3>
                <p className="text-gray-700">
                  BRAC University, ICPC World Finalist (2022)
                </p>
              </div>
            </div>

            {/* Arnab Sarker */}
            <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg flex items-center gap-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                A
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Arnab Sarker
                </h3>
                <p className="text-gray-700">
                  KUET, ICPC World Finalist (2024)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
