import React, { useRef } from "react";

interface OtpInputProps {
  numInputs?: number;
  value: string;
  onChange: (otp: string) => void;
  separator?: React.ReactNode;
  placeholder?: string;
  inputType?: "text" | "number" | "password";
  isDisabled?: boolean;
  isInputNum?: boolean;
  containerStyle?: string;
  inputStyle?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({
  numInputs = 4,
  value,
  onChange,
  separator = "",
  placeholder = "",
  inputType = "text",
  isDisabled = false,
  isInputNum = true,
  containerStyle = "flex gap-2 items-center",
  inputStyle = `
    w-12 h-12 text-center text-xl font-medium 
    border border-gray-300 rounded-lg 
    focus:outline-none focus:border-blue-500 
    transition
  `
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const getValue = (index: number) => value[index] ?? "";

  const handleChange = (digit: string, index: number) => {
    if (isInputNum && digit && !/^\d+$/.test(digit)) return;

    const otpArr = value.split("");
    otpArr[index] = digit;
    const newValue = otpArr.join("");
    onChange(newValue);

    if (digit && index < numInputs - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text");

    if (isInputNum && !/^\d+$/.test(pasted)) return;

    const trimmed = pasted.slice(0, numInputs);
    onChange(trimmed);

    const lastIndex = trimmed.length - 1;
    inputRefs.current[lastIndex]?.focus();
  };

  return (
    <div className={containerStyle}>
      {Array.from({ length: numInputs }).map((_, index) => (
        <React.Fragment key={index}>
          <input
            ref={el => {
              inputRefs.current[index] = el;
            }}
            type={inputType}
            value={getValue(index)}
            placeholder={placeholder}
            onChange={e => handleChange(e.target.value.slice(-1), index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onPaste={handlePaste}
            maxLength={1}
            disabled={isDisabled}
            inputMode={inputType === "number" ? "numeric" : "text"}
            className={inputStyle}
          />
          {index < numInputs - 1 && separator}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OtpInput;
