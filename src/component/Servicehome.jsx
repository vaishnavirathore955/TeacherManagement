import React, { useRef } from "react";
import { FaChalkboardTeacher, FaBookOpen, FaUsers } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Fade-in animation for sections
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Servicebanner() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full px-6 md:px-20 py-30 bg-white flex flex-col md:flex-row items-center justify-between gap-10">
      {/* LEFT IMAGES */}
      <motion.div
        ref={imageRef}
        className="relative w-full md:w-1/2 flex items-center justify-center"
        variants={fadeInUp}
        initial="hidden"
        animate={isImageInView ? "visible" : "hidden"}
      >
        {/* Small Left Image (Only visible on lg and up) */}
        <img
          src="/about-group-02-2.jpg"
          alt="Side 1"
          className="absolute -left-12 top-1/4 w-38 shadow-lg z-10 hidden lg:block"
        />

        {/* Main Center Image (Always visible) */}
        <img
          src="/about-group-01-2.jpg"
          alt="Main"
          className="w-[70%] shadow-xl z-20"
        />

        {/* Animated Bottom Right Image (Only visible on lg and up) */}
        <motion.img
          src="/about-group-03-2 (1).jpg"
          alt="Side 2"
          className="absolute -right-0 bottom-50 w-50 shadow-lg z-30 hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* RIGHT TEXT SECTION */}
      <motion.div
        ref={textRef}
        className="w-full md:w-1/2 space-y-2"
        variants={fadeInUp}
        initial="hidden"
        animate={isTextInView ? "visible" : "hidden"}
      >
        <p className="text-lg text-[#F26522] font-bold uppercase tracking-widest">
          Service
        </p>
        <h2 className="text-4xl font-bold text-gray-900 leading-snug">
          We Offer The Best Carrier
        </h2>

        {/* Features */}
        <div className="space-y-5 mt-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaChalkboardTeacher className="text-yellow-500 text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">
                Industry Expert Instructor
              </h4>
              <p className="text-gray-500 text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                eiusmod tempor incididunt dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaBookOpen className="text-blue-500 text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">
                Up-to-Date Course Content
              </h4>
              <p className="text-gray-500 text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                eiusmod tempor incididunt dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FaUsers className="text-yellow-500 text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800">
                Biggest Student Community
              </h4>
              <p className="text-gray-500 text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                eiusmod tempor incididunt dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-[#0D2B4F] hover:bg-[#F26522] text-white font-bold rounded-md transition text-md cursor-pointer">
          Know About Us →
        </button>
      </motion.div>
    </section>
  );
}
