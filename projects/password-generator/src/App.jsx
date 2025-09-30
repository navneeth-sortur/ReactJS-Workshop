import React, { useState, useCallback, useEffect } from "react";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordControls from "./components/PasswordControls";
import PasswordStrength from "./components/PasswordStrength";
import { generatePassword, calculateStrength } from "./utils/passwordUtils";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generateNewPassword = useCallback(() => {
    const newPassword = generatePassword(
      length,
      includeNumbers,
      includeSpecialChars
    );
    setPassword(newPassword);
  }, [length, includeNumbers, includeSpecialChars]);

  useEffect(() => {
    generateNewPassword();
  }, [generateNewPassword]);

  const strength = calculateStrength(password, {
    minLength: 8,
    requireNumbers: includeNumbers,
    requireSpecialChars: includeSpecialChars
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Password Generator
          </h1>
          <p className="text-gray-600">Create strong and secure passwords</p>
        </div>

        <PasswordDisplay password={password} onGenerate={generateNewPassword} />

        <PasswordStrength strength={strength} />

        <PasswordControls
          length={length}
          setLength={setLength}
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
          includeSpecialChars={includeSpecialChars}
          setIncludeSpecialChars={setIncludeSpecialChars}
        />

        <div className="text-xs text-gray-500 text-center pt-4 border-t">
          <p>Your password is never stored or transmitted</p>
        </div>
      </div>
    </div>
  );
};

export default App;
