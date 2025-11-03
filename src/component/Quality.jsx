import React, { useRef } from "react";
import { FaBookOpen, FaLock } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Quality() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-gradient-to-r from-[#f8e9e4] via-[#f9f2f0] to-[#e8e8fc] py-30 px-6 md:px-10 lg:px-24">
      <div className="flex flex-col md:flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-0">
        {/* IMAGE GRID */}
        <motion.div
          ref={imageRef}
          className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[180px_260px] gap-2 md:gap-[8px] lg:gap-[10px] justify-center items-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isImageInView ? "visible" : "hidden"}
        >
          <div className="relative w-[170px] h-[210px] mt-6 mx-auto md:ms-30 lg:ms-0">
            <img
              src="/gallery-1-2.jpg"
              alt="Students reading"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>

          <div className="w-[260px] h-[270px] mx-auto md:me-30">
            <img
              src="/gallery-2-2.jpg"
              alt="Smiling girl"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2 relative w-full max-w-[450px] h-[180px] mx-auto mt-[6px] md:mt-[4px]">
            <img
              src="/gallery-3-2.jpg"
              alt="College group"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT BLOCK */}
        <motion.div
          ref={textRef}
          className="w-full lg:w-1/2 space-y-3 mt-10 md:mt-0"
          variants={fadeInUp}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
        >
          <p className="text-[#F26522] font-semibold text-[18px]">
            Trust, Transparency & Quality
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-md ">
            The highest result of education is tolerance
          </h2>
          <p className="text-gray-600 text-base leading-relaxed py-4">
            We personally verify every teacher profile listed on our portal.
            Our admin team ensures that no misleading information is shown and
            that every query is safely routed to the right teacher. Data
            security and communication privacy are our top priorities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 pb-5">
            <div className="flex items-start gap-4">
              <div className="bg-[#F26522] text-white p-3 rounded-full shadow-lg text-lg">
                <FaBookOpen />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Flexible Classes</h4>
                <p className="text-[15px] text-gray-600">
                  Students can access course materials, participate in debate &
                  discussions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#F26522] text-white p-3 rounded-full shadow-lg text-lg">
                <FaLock />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Educator Support</h4>
                <p className="text-[15px] text-gray-600">
                  Complete assignments from a remote location, such as their
                  workplace.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-6 bg-[#0D2B4F] hover:bg-[#F26522] text-white font-bold px-6 py-3 rounded-md shadow-md transition duration-200 text-md cursor-pointer ">
            Learn More →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
