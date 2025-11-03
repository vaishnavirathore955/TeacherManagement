import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaUserAlt,
  FaBook,
  FaUserCheck,
  FaMedal,
  FaSmile,
  FaUsers,
} from "react-icons/fa";

export default function Whywestarted() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const iconBackgrounds = [
    "bg-indigo-100 text-indigo-600",
    "bg-red-100 text-red-500",
    "bg-yellow-100 text-yellow-500",
    "bg-orange-100 text-orange-500",
  ];

  return (
    <section
      className="bg-gradient-to-r from-[#f8e9e4] via-[#f9f2f0] to-[#e8e8fc] py-20 px-4 md:px-5"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 mt-5 mb-10">
        {/* Cards Section */}
        <div className="grid grid-cols-2 gap-6 flex-1">
          {[
            {
              icon: <FaUserAlt />,
              number: 449,
              label: "Learners & counting",
            },
            {
              icon: <FaBook />,
              number: 330,
              label: "Courses & Video",
            },
            {
              icon: <FaUserCheck />,
              number: 275,
              label: "Certified Students",
            },
            {
              icon: <FaMedal />,
              number: 378,
              label: "Winning Award",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-shadow duration-300 p-6 text-center"
            >
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${iconBackgrounds[i]}`}
              >
                <div className="w-full h-full flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900">
                {inView ? <CountUp end={item.number} duration={2} /> : 0}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <p className="text-[#F26522] uppercase font-bold text-[18px] mb-2 ">
            Why we started
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6 ">
            Creating A Community Of Life <br /> Long Learners
          </h2>
          <p className="text-gray-600 mb-8">
            We noticed a common struggle: students couldn't easily find trusted,
            nearby teachers — and teachers couldn’t reach the right learners.
            Traditional methods were slow and unreliable. So we created a
            platform that works fast, is accessible 24/7, and ensures trust,
            transparency, and convenience for both sides.
          </p>

          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-100 text-orange-500 w-14 h-14 flex items-center justify-center rounded-full text-2xl shrink-0">
              <FaSmile />
            </div>
            <div>
              <p className="font-bold text-gray-900">Trusted By Thousands</p>
              <p className="text-gray-600 text-sm mt-1">
                Online learning has become increasingly popular in recent years,
                offering a flexible and convenient way for learning.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 text-indigo-500 w-14 h-14 flex items-center justify-center rounded-full text-2xl shrink-0">
              <FaUsers />
            </div>
            <div>
              <p className="font-bold text-gray-900">
                Unlimited Resources With Strong Support
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Our platform also features a collaborative learning environment,
                where you can connect with fellow learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
