
"use client"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center sm:px-16 md:px-16 px-6 py-16 my-8
      bg-gradient-to-br from-gray-50 via-white to-gray-200 overflow-hidden"
    >
       {/* Floating Gradient Circles */}
       <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>
      {/* Contact Card */}
      <div className="bg-yellow-200 text-black px-8 py-16 rounded-2xl shadow-xl w-full max-w-md backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <hr className="border-gray-500 mb-4" />

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="bg-white text-green-800 p-3 rounded-full">
              <FaMapMarkerAlt className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Meet Us</h4>
              <p>Purbachal American City</p>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-start gap-4">
            <div className="bg-white text-green-800 p-3 rounded-full">
              <FaPhoneAlt className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Call Us</h4>
              <p>+880 1719 767459</p>
              <p>+880 1879 597656</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-white text-green-800 p-3 rounded-full">
              <FaEnvelope className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email Us</h4>
              <p>admin@gubcpa.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      
    </section>
    
  );
};

export default Contact;
