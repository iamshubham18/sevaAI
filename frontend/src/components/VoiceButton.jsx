import { FaMicrophone } from "react-icons/fa";
import { useState } from "react";

const VoiceButton = ({ onVoiceInput }) => {
  const [isListening, setIsListening] = useState(false);

  const handleVoice = () => {
    setIsListening(!isListening);

    // This will be replaced with Speech Recognition later
    if (onVoiceInput) {
      onVoiceInput();
    }
  };

  return (
    <button
      onClick={handleVoice}
      className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
        isListening
          ? "bg-red-500 text-white scale-110"
          : "bg-blue-600 hover:bg-blue-700 text-white"
      }`}
    >
      <FaMicrophone size={22} />

      {/* Pulse Animation */}
      {isListening && (
        <>
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-40 animate-ping"></span>
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-20 scale-125 animate-pulse"></span>
        </>
      )}
    </button>
  );
};

export default VoiceButton;