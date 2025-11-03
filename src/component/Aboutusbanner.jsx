import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const AboutSection = () => {
  return (
    <section className="bg-white py-20 ps-10 overflow-x-hidden">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 lg:gap-40 py-20"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Image Section */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center items-center"
          variants={fadeInUp}
        >
          <img
            src="/about-image-01-2.png"
            alt="Main student"
            className="w-[360px] h-auto md:w-[420px] lg:w-[500px] rounded-xl relative z-10"
          />

          {/* Group image – only on mobile & lg */}
          <div className="absolute bottom-0 right-6 sm:left-40 md:left-[420px] w-32 h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full overflow-hidden z-20 bg-white sm:block md:hidden lg:block">
            <img
              src="/about-image-02-2.png"
              alt="Group"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Finished Sessions badge */}
          <div className="absolute -left-2 top-5 w-28 h-28 md:w-40 md:h-40 bg-white rounded-full shadow-2xl z-30 sm:block md:hidden lg:flex flex-col items-center justify-center text-center px-2">
            <div className="flex flex-col items-center justify-center leading-tight">
              <p className="text-[#F26522] text-xl md:text-3xl font-bold">2.98</p>
              <p className="text-sm md:text-base font-medium text-[#0D2B4F] mt-1 text-center">
                Finished<br />Sessions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div className="w-full md:w-1/2" variants={fadeInUp}>
          <p className="uppercase text-[#F26522] text-[18px] font-bold mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-8">
            Knowledge is power,<br />Information is liberating.
          </h2>
          <p className="text-gray-600 mb-8">
            a digital bridge between students and educators. We are a modern education platform designed to help learners easily discover and connect with verified, subject-specific teachers based on their location, interest, and learning goals.
          </p>

          <p className="font-semibold text-gray-900 mb-5 text-xl">People Love To Learn With Us</p>

          {/* Stats */}
          <div className="flex gap-12 mb-8">
            <div>
              <p className="text-[#F26522] text-2xl font-bold">90%</p>
              <p className="text-gray-600 text-sm mt-5">
                90% of students see their course through to completion.
              </p>
            </div>
            <div>
              <p className="text-[#F26522] text-2xl font-bold">9/10</p>
              <p className="text-gray-600 text-sm mt-3">
                9/10 users reported better learning outcomes.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-[#0D2B4F] text-white font-bold px-8 py-3 rounded hover:bg-[#F26522] transition-all text-md cursor-pointer">
            Learn More →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
