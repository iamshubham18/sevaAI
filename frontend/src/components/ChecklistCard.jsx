import { FaCheckCircle } from "react-icons/fa";

function ChecklistCard({ title = "Required Documents", documents = [] }) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        📋 {title}
      </h2>

      {documents.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No documents available.
        </p>
      ) : (
        <ul className="space-y-3">
          {documents.map((doc, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700"
            >
              <FaCheckCircle className="text-green-500 text-lg" />
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ChecklistCard;