import React from "react";
import { Link } from "react-router-dom";

const Aboutbreadcrumb = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#f8e9e4] via-[#f9f2f0] to-[#e8e8fc] py-20 px-6 overflow-hidden">
     

      {/* Text content */}
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 ml-20 mt-20">
          About Us 
        </h1>
        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 ml-20">
          <Link to="/" className="hover:underline text-lg">
            Home
          </Link>
          <span className="text-lg">›</span>
          <p className="text-lg font-medium">About Us </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutbreadcrumb;
