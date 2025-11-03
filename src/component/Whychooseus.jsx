import React from "react";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function AboutUsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 font-urbanist">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-12">
        {/* Image Section */}
        <div className="relative w-full lg:w-5/12 min-h-[300px] sm:min-h-[400px]">
<div className="hidden sm:block absolute top-10 sm:top-16 left-6 sm:left-14 w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-[360px] sm:h-[450px] md:h-[520px] lg:h-[570px] rounded-t-full rounded-b-[60px] border-[6px] border-orange-400 z-0"></div>
          <div className="relative z-10 overflow-hidden rounded-t-full rounded-b-[60px]">
            <img
              src="/about-image-09-2.jpg"
              alt="Students Learning"
              className="w-full h-auto object-cover rounded-t-full rounded-b-[60px] scale-95"
            />
          </div>

          {/* Badge Circle */}
          <div className="absolute top-1/2 -left-6 sm:-left-8 transform -translate-y-1/2 z-20">
            <div className="w-[70px] sm:w-[90px] md:w-[100px] h-[70px] sm:h-[90px] md:h-[100px] rounded-full bg-orange-400 text-white text-[10px] sm:text-xs font-semibold flex flex-col items-center justify-center rotate-[-15deg] shadow-lg border-4 sm:border-8 border-white text-center leading-tight">
              <span>STRONG</span>
              <span>ONLINE</span>
              <span className="text-[8px] sm:text-[10px]">SUPPORT</span>
              <span className="text-[8px] sm:text-[10px]">24/7</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-6/12 lg:ml-20 mt-12 sm:mt-16 md:mt-20 px-1 sm:px-2">
          <p className="text-[#F26522] font-bold uppercase mb-2 tracking-wide text-[18px] sm:text-base">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1444] leading-snug sm:leading-tight mb-6 text-balance">
            Creating A Community Of Life Long Learners
          </h2>

          <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed mb-8">
            Learning from an online event involves several key steps. Firstly, it’s
            important to research and choose an event that aligns with your
            learning objectives and interests. Once you’ve registered for the
            event, make sure to review the agenda and schedule to plan your time
            effectively.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm sm:text-base mb-10">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#F26522]" />
              Smart Filtering System
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#F26522]" />
              Verified Teachers 
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#F26522]" />
              Interactive Teacher Cards
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#F26522]" />
              Instant Query System            
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button className="bg-[#0D2B4F] hover:bg-[#F26522] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-md sm:text-base font-bold shadow-md transition cursor-pointer">
              Know About Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
