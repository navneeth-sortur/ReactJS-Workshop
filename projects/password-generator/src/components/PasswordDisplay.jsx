import { useState } from "react";
import { Copy, RefreshCw, Eye, EyeOff } from "lucide-react";

const PasswordDisplay = ({ password, onGenerate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy password: ", err);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const displayPassword = isVisible ? password : "•".repeat(password.length);

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <div className="flex-1 relative">
          <input
            type={isVisible ? "text" : "password"}
            value={displayPassword}
            readOnly
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={toggleVisibility}
            aria-label="Toggle visibility of password"
            className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          onClick={copyToClipboard}
          aria-label="Copy password to clipboard"
          className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
        >
          <Copy size={18} />
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>

        <button
          onClick={onGenerate}
          aria-label="Regenerate password"
          className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          title="Generate new password"
        >
          <RefreshCw size={20} />
        </button>
      </div>
    </div>
  );
};

export default PasswordDisplay;
