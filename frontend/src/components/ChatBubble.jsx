import { FaUserCircle, FaRobot } from "react-icons/fa";

function ChatBubble({ sender, message }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`flex items-end gap-3 max-w-[80%] ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}
        <div
          className={`text-3xl ${
            isUser ? "text-blue-600" : "text-green-600"
          }`}
        >
          {isUser ? <FaUserCircle /> : <FaRobot />}
        </div>

        {/* Message Bubble */}
        <div
          className={`px-5 py-3 rounded-2xl shadow-md break-words ${
            isUser
              ? "bg-blue-600 text-white rounded-br-sm"
              : "bg-white text-gray-800 border rounded-bl-sm"
          }`}
        >
          <p className="text-sm md:text-base leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;