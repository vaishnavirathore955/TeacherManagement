import { useState, useEffect } from "react";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [slideDown, setSlideDown] = useState(false);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Services", path: "/services" },
    { label: "Teachers", path: "/teachers" },
    { label: "Contacts", path: "/contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setSlideDown(true);
      } else {
        setScrolled(false);
        setSlideDown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6  h-22 flex justify-between items-center transition-all duration-500 ease-in-out
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
        ${slideDown ? "animate-slide-down" : ""}
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 h-full ">
        <img src="/Logo.png" alt="Logo" className="h-30 w-25 object-contain ml-20 py-2 " />
      </div>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Nav Links (Desktop) */}
      <ul className="hidden lg:flex space-x-10 text-[18px] font-semibold text-gray-800 " >
        {navLinks.map((item, idx) => (
          <li key={idx} className="relative group">
            <Link
              to={item.path}
              onClick={() => setActivePath(item.path)}
              className={`transition duration-300 ${
                activePath === item.path
                  ? "text-[#F26522] font-bold"
                  : "hover:text-[#F26522]"
              }`}
            >
              {item.label}
            </Link>

            {/* Underline on hover & active */}
            <span
              className={`absolute bottom-[-4px] h-[2px] bg-[#F26522] transition-all duration-300 
                ${
                  activePath === item.path
                    ? "left-0 w-full"
                    : "left-1/2 w-0 group-hover:left-0 group-hover:w-full"
                }
              `}
            />
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
     <div className="hidden lg:flex items-center gap-4">
      <a
        href="https://wa.me/7440440908" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#0D2B4F] text-white px-4 py-3 rounded-md shadow hover:bg-[#F26522] transition"
      >
        <FaUser className="text-sm" />
        <span className="font-semibold text-md">Contact Us</span>
      </a>
    </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md lg:hidden z-50">
          <ul className="flex flex-col text-gray-800 text-[18px] px-4 py-4 space-y-4 font-medium">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className={`block py-2 ${
                    activePath === item.path
                      ? "text-indigo-600 font-bold"
                      : "hover:text-indigo-600"
                  }`}
                  onClick={() => {
                    setActivePath(item.path);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 flex gap-2">
              <button className="flex-1 bg-white shadow rounded-md p-2 hover:bg-gray-100">
                <FaSearch className="text-gray-600 text-sm mx-auto" />
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 bg-indigo-600 text-white py-2 rounded-md shadow hover:bg-indigo-700">
                <FaUser className="text-sm" />
                <span className="text-sm">Login</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
