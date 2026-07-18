    import { FaRobot } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
            <FaRobot className="text-white text-2xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Seva<span className="text-blue-600">AI</span>
            </h1>

            <p className="text-sm text-gray-500">
              Government Service Assistant
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Services
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Schemes
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 transition font-medium"
          >
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Language Selector */}
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-100 transition">
            <FiGlobe />
            <span className="hidden sm:block">English</span>
          </button>

          {/* Login Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-md transition">
            Login
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;