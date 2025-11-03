import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-r from-[#f8e9e4] via-[#f9f2f0] to-[#e8e8fc] relative py-20 px-4 flex justify-center items-center text-center text-black">
      {/* Background Decorations (optional - mimic image decoration) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Add more background images or patterns here if needed */}
      </div>

      <div className="z-10 max-w-2xl w-full">
        <p className="uppercase  tracking-widest font-bold">
          Subscribe Newsletter
        </p>
        <h2 className="text-4xl md:text-4xl font-bold my-3">
          Get Every Latest News
        </h2>

        <form
  onSubmit={(e) => e.preventDefault()}
  className="mt-15 flex items-center bg-white px-4 py-3 shadow-md rounded-md"
>
  <HiOutlineMail className="text-gray-400 text-xl mr-2" />
  <input
    type="email"
    placeholder="Enter your mail address"
    className="flex-1 text-gray-700 placeholder:text-gray-400 p-2 rounded-md focus:outline-none"
  />
  <button
    type="submit"
    className="text-[#0D2B4F] hover:text-[#F26522] ml-3 mr-3"
  >
    <FaPaperPlane className="text-xl" />
  </button>
</form>

      </div>
    </section>
  );
}
