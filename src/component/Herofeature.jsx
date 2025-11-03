import {
  FaChalkboardTeacher,
  FaRulerCombined,
  FaBookOpen,
  FaStopwatch,
} from "react-icons/fa";
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

export default function FeatureSection() {
  return (
    <section className="w-full bg-gray-100 px-4 sm:px-6 lg:px-20 py-16 overflow-x-hidden">
      <motion.div
        className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div className="flex-1 w-full" variants={fadeInUp}>
          <p className="text-[#F26522] font-bold uppercase tracking-wide text-[18px]">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-10">
            Smart learning tools
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <motion.div variants={fadeInUp}>
              <FaChalkboardTeacher className="text-orange-500 text-4xl mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                Advanced Teacher Search
              </h3>
              <p className="text-gray-500 text-base sm:text-[17px]">
                Filter teachers based on subject, location (state, city, area), and even gender.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp}>
              <FaRulerCombined className="text-orange-500 text-4xl mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                Verified Teacher Profiles
              </h3>
              <p className="text-gray-500 text-base sm:text-[17px]">
                Each profile includes qualifications, a short bio, subject expertise, and optionally a video intro.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp}>
              <FaBookOpen className="text-orange-500 text-4xl mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                Direct Query System
              </h3>
              <p className="text-gray-500 text-base sm:text-[17px]">
                Users can send questions directly to teachers, with automatic email notifications for both sides.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeInUp}>
              <FaStopwatch className="text-orange-500 text-4xl mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                Admin Managed
              </h3>
              <p className="text-gray-500 text-base sm:text-[17px]">
                A professional backend system for teacher approvals and user query management.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 w-full flex justify-center mb-10 lg:mb-0"
          variants={fadeInUp}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square">
            <img
              src="/choose-us-image-01-2.jpg"
              alt="Students Learning"
              className="rounded-xl object-cover w-full h-full"
            />
            <div className="absolute border border-orange-500 rounded-full w-full h-full top-3 left-3 -z-10"></div>
            <div className="absolute border border-orange-500 rounded-full w-full h-full top-6 left-6 -z-20"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
