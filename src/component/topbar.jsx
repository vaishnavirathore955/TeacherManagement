import { FaSearch, FaFilter } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-white shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 outline-none w-[200px]"
          />
          <button className="bg-blue-600 text-white px-4 flex items-center gap-1">
            <FaSearch />
            Search
          </button>
        </div>

        <button className="flex items-center gap-2 px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
          <FaFilter />
          Filters
        </button>

        <button className="flex items-center gap-2 px-3 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
          <IoIosSettings />
          Configurations
        </button>
      </div>

      {/* Right Section */}
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        <FiPlus />
        Add new Task
      </button>
    </div>
  );
}
