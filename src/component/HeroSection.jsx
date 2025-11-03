import { useState } from "react";
import {
  FaArrowRight,
  FaCamera,
  FaMicrophoneSlash,
  FaVideo,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Parent container animation with stagger
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Children animation
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroBanner() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <section className="w-full py-28 px-6 lg:px-20 font-urbanist bg-gradient-to-r from-[#edeaff] to-[#fdfdff]">
      <motion.div
        className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-16"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div className="flex-1 text-center lg:text-left" variants={fadeInUp}>
          <span className="text-[15px] text-[#F26522] font-bold uppercase tracking-wide">
            Excellence in Education
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0D2B4F] leading-tight">
            Find the Right Teacher, Anytime, Anywhere.
          </h1>
          <p className="mt-6 text-[#4B4B60] max-w-xl mx-auto lg:mx-0 text-base leading-relaxed relative pl-4 border-l-4 border-[#7367F0] font-semibold">
            Easily discover verified teachers by subject, location, and
            expertise. Submit your queries and connect with the best educators
            near you.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center bg-[#0D2B4F] text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-[#F26522] transition font-bold"
            >
              Get Started Today <FaArrowRight className="ml-2 text-sm" />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Tabbed Form Section */}
        <motion.div
          className="flex-1 mt-10 w-full max-w-xl"
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="flex justify-center gap-4 mb-6">
              <button
                className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  activeTab === "student"
                    ? "bg-[#0D2B4F] text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("student")}
              >
                🎓 Student
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  activeTab === "teacher"
                    ? "bg-[#0D2B4F] text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("teacher")}
              >
                👨‍🏫 Teacher
              </button>
            </div>

            {activeTab === "student" ? (
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                />
                <input
                  type="text"
                  placeholder="Subject Needed"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                />
                <textarea
                  rows="3"
                  placeholder="Describe your query"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0D2B4F] text-white py-3 rounded-lg font-semibold hover:bg-[#d95417] transition"
                >
                  Submit as Student
                </button>
              </form>
            ) : (
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                />
                <input
                  type="text"
                  placeholder="Subjects You Teach"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                />
                <textarea
                  rows="3"
                  placeholder="Your short bio or intro"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0D2B4F] text-white py-3 rounded-lg font-semibold hover:bg-[#d95417] transition"
                >
                  Submit as Teacher
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
