import { useState } from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";

const ChatSection = () => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!question.trim()) return;

    console.log("User Question:", question);

    // Later we'll send this to the backend
    setQuestion("");
  };

  return (
    <section className="w-full max-w-5xl mx-auto mt-12 px-4">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-gray-200">

        {/* Chat Messages */}
        <div className="space-y-5 h-[420px] overflow-y-auto pr-2">

          {/* AI Welcome Message */}
          <div className="flex">
            <div className="bg-blue-600 text-white px-5 py-4 rounded-2xl rounded-tl-sm max-w-[80%] shadow-md">
              👋 Welcome to <span className="font-semibold">SevaAI</span>!
              <br />
              Ask me anything about:
              <ul className="list-disc ml-5 mt-2 text-sm">
                <li>Passport</li>
                <li>Aadhaar</li>
                <li>PAN Card</li>
                <li>Driving Licence</li>
                <li>Government Schemes</li>
              </ul>
            </div>
          </div>

          {/* Dummy User Message */}
          <div className="flex justify-end">
            <div className="bg-gray-100 px-5 py-3 rounded-2xl rounded-tr-sm shadow max-w-[75%]">
              How do I apply for a passport?
            </div>
          </div>

          {/* Dummy AI Response */}
          <div className="flex">
            <div className="bg-blue-50 border border-blue-200 px-5 py-4 rounded-2xl rounded-tl-sm shadow max-w-[80%]">
              <p className="font-semibold text-blue-700 mb-2">
                Passport Application
              </p>

              <p className="text-gray-700 text-sm">
                To apply for a passport, visit the Passport Seva Portal and
                complete the online application.
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  📄 Required Documents
                </h4>

                <ul className="list-disc ml-5 text-gray-600 text-sm">
                  <li>Aadhaar Card</li>
                  <li>Address Proof</li>
                  <li>Birth Certificate</li>
                </ul>
              </div>

              <button className="mt-5 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-xl">
                Apply Now
              </button>
            </div>
          </div>

        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex items-center gap-3"
        >
          <input
            type="text"
            placeholder="Ask about any Government Service..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Voice Button */}
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200 p-4 rounded-xl transition"
          >
            <FaMicrophone size={18} />
          </button>

          {/* Send Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition"
          >
            <FaPaperPlane size={18} />
          </button>
        </form>

      </div>
    </section>
  );
};

export default ChatSection;