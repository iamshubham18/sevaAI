import { motion } from "framer-motion";
import { FaMicrophone, FaGlobeAsia } from "react-icons/fa";

function Hero() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium"
        >
          <FaGlobeAsia />
          AI Powered Government Service Assistant
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mt-8 text-gray-900 leading-tight"
        >
          Government Services
          <span className="text-blue-600"> Made Simple</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Ask questions about Passport, Aadhaar, PAN Card,
          Driving Licence, Pension, Government Schemes and
          much more in your preferred language.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

            <input
              type="text"
              placeholder="Ask your government service question..."
              className="flex-1 px-6 py-5 outline-none text-lg"
            />

            <button
              className="
                bg-blue-600
                hover:bg-blue-700
                transition
                text-white
                px-7
                py-5
              "
            >
              <FaMicrophone size={22} />
            </button>
          </div>
        </motion.div>

        {/* Popular Searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {[
            "Passport",
            "Aadhaar",
            "PAN Card",
            "Driving Licence",
            "Birth Certificate",
          ].map((item) => (
            <button
              key={item}
              className="px-5 py-2 bg-gray-100 hover:bg-blue-100 rounded-full text-gray-700 transition"
            >
              {item}
            </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;