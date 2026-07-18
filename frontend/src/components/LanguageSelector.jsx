import { FaGlobeAsia } from "react-icons/fa";

function LanguageSelector({ language, setLanguage }) {
  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी" },
    { code: "kn", name: "ಕನ್ನಡ" },
  ];

  return (
    <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
      <FaGlobeAsia className="text-blue-600 text-lg" />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-transparent outline-none cursor-pointer text-gray-700 font-medium"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;