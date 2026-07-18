import { FaArrowRight } from "react-icons/fa";

const RecommendationCard = ({
  recommendations = [
    "Track Passport Status",
    "Update Aadhaar",
    "Download PAN Card",
    "Driving Licence Renewal",
  ],
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mt-6">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        💡 Recommended Services
      </h2>

      {/* Recommendation Chips */}
      <div className="flex flex-wrap gap-3">
        {recommendations.map((item, index) => (
          <button
            key={index}
            className="flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            {item}
            <FaArrowRight className="text-sm" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecommendationCard;