import React, { useState, useEffect } from "react";
import { RiHeadphoneFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";
import axios from "axios"; // ⬅️ added axios import

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone1: "",
    phone2: "",
    address: "",
  });

  // ✅ Updated to use Axios and token (cookie)
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/website/contact", {
        withCredentials: true,
      })
      .then((res) => {
        setContactInfo(res.data);
      })
      .catch((err) => console.error("Failed to fetch contact info:", err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form submitted successfully!");
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="py-30 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center flex flex-col gap-3 mb-8">
          <p className="text-[#F26522] font-bold text-[15px]">NEED HELP?</p>
          <h1 className="text-[#231F40] font-extrabold text-4xl mb-8">
            Get In Touch With Us
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2 relative">
            {/* Dot Pattern */}
            <div className="absolute top-[-35px] left-[-35px] z-[-1] grid grid-rows-6 grid-cols-6 gap-2">
              {Array.from({ length: 45 }).map((_, i) => (
                <span
                  key={i}
                  className="w-[6px] h-[6px] rounded-full bg-[#0D2B4F] opacity-60"
                ></span>
              ))}
            </div>

            {/* Card 1 - Email */}
            <div className="bg-white rounded-xl p-16 text-center shadow transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:text-white hover:bg-[#0D2B4F]">
              <div className="flex justify-center mb-4 item-center">
                <div className="bg-indigo-50 text-indigo-600 p-3 rounded-full">
                  <FaGlobe />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-base font-medium">
                {contactInfo.email || "Loading..."}
              </p>
            </div>

            {/* Card 2 - Phone */}
            <div className="bg-white rounded-xl p-16 text-center shadow transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:text-white hover:bg-[#0D2B4F]">
              <div className="flex justify-center mb-4">
                <div className="bg-green-200 text-green-700 p-3 rounded-full">
                  <RiHeadphoneFill />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us On</h3>
              <p className="text-base font-medium">
                {contactInfo.phone1 || "Loading..."}
              </p>
              <p className="text-base font-medium">
                {contactInfo.phone2 || ""}
              </p>
            </div>

            {/* Card 3 - Location */}
            <div className="bg-white rounded-xl p-16 text-center shadow transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:text-white hover:bg-[#0D2B4F] sm:col-span-2">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                  <HiLocationMarker />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-base font-medium">
                {contactInfo.address || "Loading..."}
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full lg:w-1/2 p-2">
            <form onSubmit={validateForm} noValidate>
              {/* Name */}
              <label htmlFor="name" className="block font-medium mb-1">
                Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name*"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded outline-none mb-3"
              />
              <p className={`text-sm mb-3 min-h-[20px] ${errors.name ? "text-red-500" : "hidden"}`}>
                {errors.name || "placeholder"}
              </p>

              {/* Email */}
              <label htmlFor="email" className="block font-medium mb-1">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email*"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded outline-none mb-3"
              />
              <p className={`text-sm mb-3 min-h-[20px] ${errors.email ? "text-red-500" : "hidden"}`}>
                {errors.email || "placeholder"}
              </p>

              {/* Phone */}
              <label htmlFor="phone" className="block font-medium mb-1">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded outline-none mb-3"
              />
              <p className={`text-sm mb-3 min-h-[20px] ${errors.phone ? "text-red-500" : "hidden"}`}>
                {errors.phone || "placeholder"}
              </p>

              {/* Subject */}
              <label htmlFor="subject" className="block font-medium mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-4 bg-gray-100 rounded outline-none mb-3"
              />
              <p className={`text-sm mb-3 min-h-[20px] ${errors.subject ? "text-red-500" : "hidden"}`}>
                {errors.subject || "placeholder"}
              </p>

              {/* Message */}
              <label htmlFor="message" className="block font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-4 bg-gray-100 rounded outline-none mb-3"
              ></textarea>
              <p className={`text-sm mb-3 min-h-[20px] ${errors.message ? "text-red-500" : "hidden"}`}>
                {errors.message || "placeholder"}
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#0D2B4F] text-white font-semibold py-3 rounded hover:bg-[#F26522] transition text-md cursor-pointer"
              >
                Submit Now →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
