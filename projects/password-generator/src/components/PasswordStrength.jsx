const strengthLevels = {
  "very-weak": { text: "Very Weak", color: "bg-gray-300", width: "0%" },
  weak: { text: "Weak", color: "bg-red-500", width: "25%" },
  medium: { text: "Medium", color: "bg-yellow-500", width: "50%" },
  strong: { text: "Strong", color: "bg-green-500", width: "75%" },
  "very-strong": { text: "Very Strong", color: "bg-emerald-600", width: "100%" }
};

const PasswordStrength = ({ strength }) => {
  const { level, feedback = [] } = strength;
  const { text, color, width } =
    strengthLevels[level] || strengthLevels["very-weak"];

  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">Strength:</span>
        <span
          className={`text-sm font-semibold ${color.replace("bg-", "text-")}`}
        >
          {text}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className={`h-2 rounded transition-all duration-300 ${color}`}
          style={{ width }}
        ></div>
      </div>

      {/* Show feedback if available */}
      {feedback.length > 0 && (
        <ul className="mt-2 text-xs text-gray-500 list-disc list-inside space-y-1">
          {feedback.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PasswordStrength;
