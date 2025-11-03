import React from "react";
import { FaLinkedin, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const instructors = [
  {
    name: "James Carlson",
    role: "WordPress Expert",
    image: "/instructor-03-01-2.webp",
  },
  {
    name: "Dr. Neha Sharma",
    role: "Mathematics (PhD)",
    image: "/instructor-03-02-2.webp",
  },
  {
    name: "Rahul Mehta ",
    role: "Physics (M.Sc)",
    image: "/instructor-03-03-2.webp",
  },
  {
    name: "Anjali Verma",
    role: " English Literature (M.A, B.Ed)",
    image: "/instructor-03-06-2.webp",
  },
];

const InstructorSection = () => {
  return (
    <section className="bg-[#0D2B4F] py-25 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-widest text-[18px] text-white font-bold">
            Team Member
          </span>
          <h3 className="text-4xl font-bold mt-0">Meet Our Instructor</h3>
        </div>

        {/* Instructor Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="relative group rounded-xl overflow-hidden">
              {/* Image */}
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-80 object-cover rounded-xl"
              />

              {/* Subtle Hover Box */}
              <div className="absolute bottom-4 left-4 right-4 bg-white p-7 rounded-xl shadow-md text-gray-800 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h5 className="text-[20px] font-semibold">{instructor.name}</h5>
                <span className="text-lg text-gray-500 mb-2 block">{instructor.role}</span>
                <div className="flex justify-start gap-4 text-[20px] text-[#0D2B4F]">
                  <a href="#"><FaLinkedin className=" hover:text-indigo-600" /></a>
                  <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
                  <a href="#"><FaTwitter className="hover:text-sky-500" /></a>
                  <a href="#"><FaYoutube className="hover:text-red-600" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default InstructorSection;
