const PasswordControls = ({
  length,
  setLength,
  includeNumbers,
  setIncludeNumbers,
  includeSpecialChars,
  setIncludeSpecialChars
}) => {
  return (
    <div className="space-y-6">
      {/* Length Slider */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-gray-700">
            Password Length: <span className="font-mono">{length}</span>
          </label>
          <span className="text-xs text-gray-500">8-20</span>
        </div>
        <input
          type="range"
          min="8"
          max="20"
          value={length}
          onChange={e => setLength(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-600"
        />
      </div>

      {/* Checkbox Options */}
      <div className="space-y-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="includeNumbers"
            checked={includeNumbers}
            onChange={e => setIncludeNumbers(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="includeNumbers"
            className="ml-2 text-sm text-gray-700"
          >
            Include Numbers (0-9)
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="includeSpecialChars"
            checked={includeSpecialChars}
            onChange={e => setIncludeSpecialChars(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="includeSpecialChars"
            className="ml-2 text-sm text-gray-700"
          >
            Include Special Characters (!@#$%^&*)
          </label>
        </div>
      </div>
    </div>
  );
};

export default PasswordControls;
