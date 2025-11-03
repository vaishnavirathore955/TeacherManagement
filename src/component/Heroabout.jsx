import { FaChalkboardTeacher, FaLaptopHouse } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function AboutUs() {
  return (
    <motion.div
      className="w-full px-4 sm:px-6 md:px-10 lg:px-20 pt-0 pb-12 lg:py-12 flex flex-col lg:flex-row items-center gap-10 mt-12 sm:mt-16 md:my-[-20px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Left Section - Images */}
      <motion.div
        className="flex-1 relative w-full flex justify-center"
        variants={fadeInUp}
      >
        {/* Main Image */}
        <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] max-w-[400px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/about-image-01-2.jpg"
            alt="Students"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Overlay Small Image (Visible Only on lg+) */}
        <div className="absolute bottom-[-40px] right-4 lg:right-[60px] z-20 w-[120px] sm:w-[150px] md:w-[180px] rounded-xl overflow-hidden shadow-md hidden lg:block">
          <img
            src="/about-image-02-2.jpg"
            alt="Excited student"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Right Section - Text */}
      <motion.div
        className="flex-1 w-full text-center lg:text-left p-4 sm:p-6 md:p-15 lg:p-8"
        variants={fadeInUp}
      >
        <h3 className="uppercase text-[18px] text-[#F26522] font-bold tracking-wider ">
          About Us
        </h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 my-1 mb-4 leading-tight">
          Who We Are
        </h2>
        <p className="text-gray-500 mb-6 text-sm sm:text-base md:text-[17px]">
          We are a digital bridge between students and educators — a modern
          education platform built to help learners discover and connect with
          verified, subject-specific teachers based on their location,
          interests, and academic goals.
          <br />
          <br />
          In today’s fast-moving world, we believe that finding the right
          teacher should be simple, not stressful. Whether you're preparing for
          an exam, diving into a new subject, or seeking extra support, our
          platform is designed to make personalized learning easy, accessible,
          and effective.
        </p>

        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
          <div className="bg-[#F26522] text-white p-3 rounded-full shrink-0">
            <FaChalkboardTeacher size={20} />
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900">Flexible Classes</h4>
            <p className="text-gray-500 text-sm md:text-base">
              Refers to acquiring knowledge or skills through digital
              technologies and the internet.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
          <div className="bg-[#F26522] text-white p-3 rounded-full shrink-0">
            <FaLaptopHouse size={20} />
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900">Learn From Anywhere</h4>
            <p className="text-gray-500 text-sm md:text-base">
              Whether you're a busy professional or a student, study from home
              effectively.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-[#0D2B4F] hover:bg-[#F26522] text-white px-6 py-3 rounded-md font-bold shadow-md transition-all text-md sm:text-base cursor-pointer">
            Know About Us →
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
