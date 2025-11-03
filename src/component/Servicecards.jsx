import React from "react";
import { FaChalkboardTeacher, FaVideo, FaLock, FaCog } from "react-icons/fa";

export default function Servicecards() {
  return (
    <section className="w-full py-40 px-6 md:px-40 bg-gradient-to-r from-[#f7f3fe] to-[#fff4eb]">
      
      <div className="text-center mb-14">
        <p className="text-[18px] font-bold text-[#F26522] uppercase tracking-widest">
          What we offer
        </p>
        <h2 className="text-4xl  font-bold text-gray-900 mt-2 leading-snug">
          Learn New Skills When And <br className="hidden md:block" /> Where You Like
        </h2>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
        <div className="group bg-white rounded-xl p-8 shadow-md transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl">
          <div className="w-16 h-16 flex items-center justify-center rounded-t-2xl mb-4 bg-purple-100 group-hover:bg-purple-500 transition duration-300">
            <FaChalkboardTeacher className="text-purple-500 group-hover:text-white text-2xl transition duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4  mt-6">Expert Instruction</h3>
          <p className="text-gray-500 text-md mb-4">
            Learn from industry leaders who bring real-world experience into the classroom.
          </p>
         <a href="#" className="relative inline-block text-lg font-bold text-gray-900 group transition">
          <span className="group-hover:text-[#F26522] transition-colors duration-300">
           Learn More <span>→</span>
          </span>
         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F26522] transition-all duration-300 group-hover:w-full" ></span>
         </a>

        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-xl p-8 shadow-md transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl">
          <div className="w-16 h-16 flex items-center justify-center rounded-t-2xl mb-4 bg-orange-100 group-hover:bg-orange-400 transition duration-300">
            <FaVideo className="text-orange-400 group-hover:text-white text-2xl transition duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4  mt-6">Video Tutorials</h3>
          <p className="text-gray-500 text-md mb-4">
            Access high-quality video content anytime, anywhere on any device.
          </p>
           <a href="#" className="relative inline-block text-lg font-bold text-gray-900 group transition">
          <span className="group-hover:text-[#F26522] transition-colors duration-300">
           Learn More <span>→</span>
          </span>
         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F26522] transition-all duration-300 group-hover:w-full" ></span>
         </a>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-xl p-8 shadow-md transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl">
          <div className="w-16 h-16 flex items-center justify-center rounded-t-2xl mb-4 bg-purple-100 group-hover:bg-purple-500 transition duration-300">
            <FaLock className="text-purple-500 group-hover:text-white text-2xl transition duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4  mt-6">Lifetime Access</h3>
          <p className="text-gray-500 text-md mb-4">
            Revisit your courses anytime. Learn at your own pace without expiration.
          </p>
          <a href="#" className="relative inline-block text-lg font-bold text-gray-900 group transition">
          <span className="group-hover:text-[#F26522] transition-colors duration-300">
           Learn More <span>→</span>
          </span>
         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F26522] transition-all duration-300 group-hover:w-full" ></span>
         </a>
        </div>

        {/* Card 4 */}
        <div className="group bg-white rounded-xl p-8 shadow-md transition-transform duration-300 hover:-translate-y-4 hover:shadow-xl ">
          <div className="w-16 h-16 flex items-center justify-center rounded-t-2xl mb-4 bg-orange-100 group-hover:bg-orange-400 transition duration-300">
            <FaCog className="text-orange-400 group-hover:text-white text-2xl transition duration-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">Learn From Anywhere</h3>
          <p className="text-gray-500 text-md mb-4">
            Use our platform from mobile, tablet, or desktop. Anywhere, anytime.
          </p>
           <a href="#" className="relative inline-block text-lg font-bold text-gray-900 group transition">
          <span className="group-hover:text-[#F26522] transition-colors duration-300">
           Learn More <span>→</span>
          </span>
         <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#F26522] transition-all duration-300 group-hover:w-full" ></span>
         </a>
        </div>
      </div>
    </section>
  );
}
