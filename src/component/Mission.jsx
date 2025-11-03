import "../index.css";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EducationSection = () => {
  const imgRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    imgRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imgRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-white py-12 px-6 md:px-20 mt-20">
      {/* Image Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 relative mb-16"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="relative z-11" ref={(el) => (imgRefs.current[0] = el)}>
          <img
            src="/mission-gallery-01.jpg"
            alt="Student 1"
            className={`rounded-lg shadow-lg ${
              visibleIndexes.includes(0) ? "float-animation delay-0" : ""
            }`}
          />
        </div>

        <div className="relative z-10" ref={(el) => (imgRefs.current[1] = el)}>
          <div className="absolute top-[-35px] -left-13 w-40 h-40 bg-orange-300 rounded-sm -z-10"></div>
          <img
            src="/mission-gallery-02.jpg"
            alt="Student 2"
            className={`rounded-lg shadow-lg ${
              visibleIndexes.includes(1) ? "float-animation delay-1" : ""
            }`}
          />
        </div>

        <div className="relative z-10" ref={(el) => (imgRefs.current[2] = el)}>
          <img
            src="/mission-gallery-03.jpg"
            alt="Student 3"
            className={`rounded-lg shadow-lg ${
              visibleIndexes.includes(2) ? "float-animation delay-2" : ""
            }`}
          />
        </div>

        <div className="relative z-10" ref={(el) => (imgRefs.current[3] = el)}>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-200 rounded-full -z-10"></div>
          <img
            src="/mission-gallery-04.jpg"
            alt="Student 4"
            className={`rounded-lg shadow-lg ${
              visibleIndexes.includes(3) ? "float-animation delay-3" : ""
            }`}
          />
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div
        className="bg-white py-15 px-4 md:px-15"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-lg font-bold text-[#F26522] uppercase mb-2">
              Our Mission
            </h4>
            <h2 className="text-xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-4">
              Education In Continuing A <br /> Proud Tradition
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Our mission is to empower learners from all walks of life by
              providing accessible, affordable, and high-quality education that
              fosters curiosity, creativity, and confidence. We are committed
              to building a learner-first ecosystem that bridges the gap
              between knowledge and real-world skills, ensuring that every
              student is equipped to thrive in a rapidly changing global
              environment.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#F26522] uppercase mb-2">
              Our Vision
            </h4>
            <h2 className="text-5xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-4">
              Education Is About Creating <br /> Leaders For Tomorrow
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Our vision is to transform the way education is delivered and
              experienced. We aim to build a learning ecosystem that is
              accessible, inclusive, and inspiring for every learner regardless
              of their location, background, or learning style. Through
              innovation, dedication, and a passion for knowledge, we strive to
              nurture curious minds, build future leaders, and empower students
              with the skills and confidence they need to thrive in a
              fast-changing world.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationSection;