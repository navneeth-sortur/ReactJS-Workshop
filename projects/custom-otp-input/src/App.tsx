import { useState } from "react";
import OtpInput from "./components/OtpInput";

export default function App() {
  const [numInputs, setNumInputs] = useState(4);
  const [separator, setSeparator] = useState("-");
  // const [placeholder, setPlaceholder] = useState("•");
  const [inputType, setInputType] = useState<"text" | "number" | "password">(
    "text"
  );
  const [isInputNum, setIsInputNum] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [otp, setOtp] = useState("");

  const handleClear = () => setOtp("");

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-6">
        Custom OTP Input Playground
      </h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Configuration</h2>

          <div className="flex flex-col gap-4">
            <label className="flex flex-col">
              <span className="text-sm text-gray-600 mb-1">
                Number of Inputs
              </span>
              <input
                type="number"
                min={3}
                max={6}
                className="border p-2 rounded"
                value={numInputs}
                onInput={e => {
                  const val = Number((e.target as HTMLInputElement).value);
                  if (val > 6) (e.target as HTMLInputElement).value = "6";
                  if (val < 3) (e.target as HTMLInputElement).value = "3";

                  setNumInputs(Number((e.target as HTMLInputElement).value));
                }}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-gray-600 mb-1">Separator</span>
              <input
                type="text"
                className="border p-2 rounded"
                value={separator}
                onChange={e => setSeparator(e.target.value)}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-gray-600 mb-1">Value</span>
              <input
                type="text"
                className="border p-2 rounded"
                value={otp}
                maxLength={numInputs}
                onChange={e => setOtp(e.target.value)}
              />
            </label>

            {/* <label className="flex flex-col">
              <span className="text-sm text-gray-600 mb-1">Placeholder</span>
              <input
                type="text"
                className="border p-2 rounded"
                value={placeholder}
                onChange={e => setPlaceholder(e.target.value)}
              />
            </label> */}

            <label className="flex flex-col">
              <span className="text-sm text-gray-600 mb-1">Input Type</span>
              <select
                className="border p-2 rounded"
                value={inputType}
                onChange={e => setInputType(e.target.value as any)}
              >
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="password">Password</option>
              </select>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isInputNum}
                onChange={e => setIsInputNum(e.target.checked)}
              />
              <span>Allow only numbers</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isDisabled}
                onChange={e => setIsDisabled(e.target.checked)}
              />
              <span>Disable input</span>
            </label>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Preview</h2>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={numInputs}
            // placeholder={placeholder}
            separator={<span className="mx-1">{separator}</span>}
            inputType={inputType}
            isDisabled={isDisabled}
            isInputNum={isInputNum}
          />

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-amber-200 hover:bg-amber-500 rounded-2xl"
            >
              Clear
            </button>

            <button
              onClick={() => alert(`OTP: ${otp}`)}
              className="px-4 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
