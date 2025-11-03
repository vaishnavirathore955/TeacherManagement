import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopHouse,
  FaChalkboardTeacher,
  FaCertificate,
  FaQuestionCircle,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="py-30 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[18px] text-[#F26522] font-bold uppercase mb-2 pb-1">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          Learn New Skills When And <br className="hidden sm:block" />
          Where You Like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className={`rounded-xl p-8 transition-all duration-300 shadow-md hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 bg-opacity-90 ${
                i === 0
                  ? "bg-blue-50"
                  : i === 1
                  ? "bg-rose-50"
                  : i === 2
                  ? "bg-blue-100"
                  : "bg-rose-100"
              }`}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow mt-3">
                <img
                  src={`/offer-icon-0${i + 1}-2.png`}
                  alt={`Feature ${i + 1}`}
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2 mt-1">
                {i === 0
                  ? "Advanced Teacher Search"
                  : i === 1
                  ? "Verified Teacher Profiles"
                  : i === 2
                  ? "Direct Query System"
                  : "Admin-Monitored Platform"}
              </h3>
              <p className="text-sm text-gray-600 mt-3">
                {i === 0
                  ? "Filter teachers based on subject, location (state, city, area), and even gender."
                  : i === 1
                  ? "Each profile includes qualifications, a short bio, subject expertise, and optionally a video intro."
                  : i === 2
                  ? "Users can send questions directly to teachers, with automatic email notifications for both sides"
                  : "A professional backend system for teacher approvals and user query management."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
