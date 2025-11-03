import React, { useState } from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaSearch,
  FaMapMarkedAlt,
  FaCity,
  FaMapPin,
  FaVenusMars,
  FaBook,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function SidebarFilters() {
  const [selectedFilters, setSelectedFilters] = useState({
    stateLabel: "",
    city: "",
    area: "",
    gender: "",
    subject: "",
    search: "",
  });

  const [openDropdowns, setOpenDropdowns] = useState({
    stateLabel: false,
    city: false,
    area: false,
    gender: false,
    subject: false,
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [videoModalUrl, setVideoModalUrl] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false); // ✅ New contact modal state

  const handleSelect = (type, value) => {
    setSelectedFilters((prev) => ({ ...prev, [type]: value }));
    setOpenDropdowns((prev) => ({ ...prev, [type]: false }));
  };

  const handleSearchChange = (e) => {
    setSelectedFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const toggleDropdown = (type) => {
    setOpenDropdowns((prev) => {
      const newDropdowns = {};
      Object.keys(prev).forEach((key) => {
        newDropdowns[key] = false;
      });
      return {
        ...newDropdowns,
        [type]: !prev[type],
      };
    });
  };

  const extractYouTubeId = (url) => {
    const regExp = /(?:youtube\.com.*(?:\?v=|\/embed\/)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const dropdownItems = [
    {
      label: "State",
      type: "stateLabel",
      icon: <FaMapMarkedAlt className="text-[#0D2B4F]" />,
      options: ["Tamil Nadu", "Maharashtra", "Delhi"],
    },
    {
      label: "City",
      type: "city",
      icon: <FaCity className="text-[#0D2B4F]" />,
      options: ["Chennai", "Mumbai", "New Delhi"],
    },
    {
      label: "Area",
      type: "area",
      icon: <FaMapPin className="text-[#0D2B4F]" />,
      options: ["North", "South", "Central"],
    },
    {
      label: "Gender",
      type: "gender",
      icon: <FaVenusMars className="text-[#0D2B4F]" />,
      options: ["Male", "Female", "Other"],
    },
    {
      label: "Subject",
      type: "subject",
      icon: <FaBook className="text-[#0D2B4F]" />,
      options: ["All", "Math", "Science", "Chemistry", "Geography"],
    },
  ];

  const courses = [
    {
      id: 1,
      img: "/course-27-590x430.webp",
      title: "Math teacher with 10+ years in high school and exam prep & prep.",
      teacher: "Janet Fleming",
      teacherImg: "/offer-icon-02-2.png",
      students: "Mathematics",
      lessons: "B.Tech",
      subject: "Math",
      video: "Play video",
      query: "Get Help",
      videoUrl: "https://youtu.be/zhqY5fuLBqs",
    },
    
    {
      id: 2,
      img: "/course-32-590x430.webp",
      title: "Focused on concept clarity and problem-solving in Physics.",
      teacher: "James Carlson",
      teacherImg: "/offer-icon-02-2.png",
      students: "Science",
      lessons: "M.Tech",
      subject: "Science",
      video: "Play video",
      query: "Get Help",
      videoUrl: "https://youtu.be/zhqY5fuLBqs",
    },
    {
      id: 3,
      img: "/course-32-590x430.webp",
      title: "Focused on concept clarity and problem-solving in Physics.",
      teacher: "James Carlson",
      teacherImg: "/offer-icon-02-2.png",
      students: "Science",
      lessons: "M.Tech",
      subject: "Science",
      video: "Play video",
      query: "Get Help",
      videoUrl: "https://youtu.be/zhqY5fuLBqs",
    },
    {
      id: 4,
      img: "/course-32-590x430.webp",
      title: "Focused on concept clarity and problem-solving in Physics.",
      teacher: "James Carlson",
      teacherImg: "/offer-icon-02-2.png",
      students: "Science",
      lessons: "M.Tech",
      subject: "Science",
      video: "Play video",
      query: "Get Help",
      videoUrl: "https://youtu.be/zhqY5fuLBqs",
    },
    {
      id: 5,
      img: "/course-32-590x430.webp",
      title: "Focused on concept clarity and problem-solving in Physics.",
      teacher: "James Carlson",
      teacherImg: "/offer-icon-02-2.png",
      students: "Science",
      lessons: "M.Tech",
      subject: "Science",
      video: "Play video",
      query: "Get Help",
      videoUrl: "https://youtu.be/zhqY5fuLBqs",
    },
    {
      id: 6,
      img: "/course-32-590x430.webp",
      title: "Focused on concept clarity and problem-solving in Physics.",
      teacher: "James Carlson",
      teacherImg: "/offer-icon-02-2.png",
      students: "Science",
      lessons: "M.Tech",
      subject: "Science",
      video: "Play video",
      query: "Get Help",
      videoUrl: "https://youtu.be/zhqY5fuLBqs",
    },
    {
      id: 7,
      img: "/course-32-590x430.webp",
      title: "Focused on concept clarity and problem-solving in Physics.",
      teacher: "James Carlson",
      teacherImg: "/offer-icon-02-2.png",
      students: "Science",
      lessons: "M.Tech",
      subject: "Science",
      video: "Play video",
      query: "Get Help",
      videoUrl: "https://youtu.be/zhqY5fuLBqs",
    },
    {
      id: 8,
      img: "/course-32-590x430.webp",
      title: "Focused on concept clarity and problem-solving in Physics.",
      teacher: "James Carlson",
      teacherImg: "/offer-icon-02-2.png",
      students: "Science",
      lessons: "M.Tech",
      subject: "Science",
      video: "Play video",
      query: "Get Help",
      videoUrl: "https://youtu.be/zhqY5fuLBqs",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const { search, subject } = selectedFilters;
    return (
      (!subject || subject === "All" || course.subject.toLowerCase().includes(subject.toLowerCase())) &&
      (!search ||
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.teacher.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Topbar Mobile */}
      <div className="lg:hidden flex justify-between items-center bg-white p-4 shadow-md sticky top-0 z-20">
        <h1 className="text-xl font-bold text-indigo-600">Untitled UI</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-indigo-600 text-2xl focus:outline-none"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Filters */}
      <div className={`${sidebarOpen ? "block" : "hidden"} lg:block`}>
        <aside className="w-full lg:w-64 bg-white shadow-md p-4 min-h-[1035px] lg:ms-28 mt-4 lg:mt-8 overflow-y-auto rounded-md">
          <div className="mb-6 relative">
            <input
              type="text"
              placeholder="Search"
              value={selectedFilters.search}
              onChange={handleSearchChange}
              className="w-full px-3 py-2 pl-10 rounded-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute top-2.5 left-3 text-gray-500" />
          </div>

          <nav className="space-y-6 text-sm mt-6">
            {dropdownItems.map((item, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-600 mb-2 px-3 pt-2 flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={selectedFilters[item.type]}
                    placeholder={`Search ${item.label}`}
                    onClick={() => toggleDropdown(item.type)}
                    onChange={(e) =>
                      setSelectedFilters((prev) => ({
                        ...prev,
                        [item.type]: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2.5 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  />
                  <div
                    className="absolute top-4 right-3 text-gray-500 cursor-pointer"
                    onClick={() => toggleDropdown(item.type)}
                  >
                    {openDropdowns[item.type] ? <FaChevronUp /> : <FaChevronDown />}
                  </div>

                  {openDropdowns[item.type] && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto">
                      {item.options
                        .filter((opt) =>
                          opt.toLowerCase().includes(selectedFilters[item.type].toLowerCase())
                        )
                        .map((opt, i) => (
                          <div
                            key={i}
                            onClick={() => handleSelect(item.type, opt)}
                            className="px-3 py-2 cursor-pointer hover:bg-indigo-100"
                          >
                            {opt}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </nav>
        </aside>
      </div>

      {/* Main Content */}
      <main className="flex-1 min-h-screen p-4 pt-0 lg:pt-3 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 lg:px-10 mb-10">
          {paginatedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-50 shadow-md rounded-sm overflow-hidden p-4 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <img src={course.img} alt={course.title} className="w-full h-50 object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={course.teacherImg} alt={course.teacher} className="w-6 h-6 rounded-full" />
                  <p className="text-gray-800 font-medium">{course.teacher}</p>
                </div>
                <h3 className="font-bold text-[21px] text-gray-700 leading-snug my-3">
                  {course.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-500 mb-5">
                  <span className="flex items-center gap-1">
                    <FaBookOpen className="text-[20px]" />
                    {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaGraduationCap className="text-[25px]" />
                    {course.lessons}
                  </span>
                </div>
                <hr className="p-3 text-gray-200" />
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setVideoModalUrl(course.videoUrl)}
                    className="px-4 py-[6px] text-[16px] bg-[#0D2B4F] text-white font-semibold rounded hover:bg-[#F26522] cursor-pointer"
                  >
                    {course.video}
                  </button>
                  <button
                    onClick={() => setContactModalOpen(true)} // ✅ Open contact modal
                    className="px-4 py-[6px] text-[16px] border border-[#0D2B4F] text-[#0D2B4F] font-semibold rounded hover:border-[#F26522] hover:text-[#F26522] transition-colors duration-300 ml-12 cursor-pointer"
                  >
                    {course.query}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-8 mb-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-300"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-indigo-700 text-white"
                  : "bg-white border border-indigo-500 text-indigo-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </main>

      {/* Video Modal */}
      {videoModalUrl && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30 ">
          <div className="absolute top-4 right-6 z-50">
            <button
              onClick={() => setVideoModalUrl(null)}
              className="text-white text-3xl font-bold hover:text-red-500 cursor-pointer"
            >
              &times;
            </button>
          </div>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-3xl aspect-video cursor-pointer">
            {videoModalUrl.includes("youtube") || videoModalUrl.includes("youtu.be") ? (
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(videoModalUrl)}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full"
                title="YouTube Video"
              ></iframe>
            ) : (
              <video
                src={videoModalUrl}
                controls
                autoPlay
                className="w-full h-full object-cover "
              />
            )}
          </div>
        </div>
      )}

      {/* ✅ Contact Modal */}
      {contactModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
    <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-lg p-6 animate-fade-in">
      {/* Close Button */}
      <button
        onClick={() => setContactModalOpen(false)}
        className="absolute top-3 right-4 text-gray-500 text-2xl hover:text-red-500 transition cursor-pointer"
      >
        &times;
      </button>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-[#F26522] mb-6">
        Get In Touch
      </h2>

      {/* Contact Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            placeholder="Write your message..."
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="button"
          onClick={() => {
            setContactModalOpen(false);
            alert("Thanks for contacting us!");
          }}
          className="w-full py-2 bg-[#0D2B4F] text-white font-semibold rounded-md hover:bg-[#F26522] transition"
        >
          Send Message →
        </button>
      </form>
    </div>
  </div>
)}
    </div>
  );
}
