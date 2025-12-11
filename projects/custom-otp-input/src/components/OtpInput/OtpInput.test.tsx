import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OtpInput from "./OtpInput";
import { vi } from "vitest";

describe("OtpInput Component", () => {
  test("renders correct number of inputs", () => {
    render(
      <OtpInput
        value=""
        onChange={() => {}}
        numInputs={6}
        separator={<span>-</span>}
        inputType="text"
        isDisabled={false}
        isInputNum={false}
      />
    );

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(6);
  });

  test("updates OTP value when typing", () => {
    const handleChange = vi.fn();

    render(
      <OtpInput
        value=""
        onChange={handleChange}
        numInputs={4}
        separator={<span>-</span>}
        inputType="text"
        isDisabled={false}
        isInputNum={false}
      />
    );

    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "5" } });

    expect(handleChange).toHaveBeenCalledWith("5");
  });

  test("moves focus to next input when typing", () => {
    const handleChange = vi.fn();

    render(
      <OtpInput
        value="1"
        onChange={handleChange}
        numInputs={4}
        separator={<span>-</span>}
        inputType="text"
        isDisabled={false}
        isInputNum={false}
      />
    );

    const inputs = screen.getAllByRole("textbox");

    inputs[0].focus();
    fireEvent.change(inputs[0], { target: { value: "3" } });

    expect(document.activeElement).toBe(inputs[1]);
  });

  test("moves focus to previous input on backspace when empty", () => {
    const handleChange = vi.fn();

    render(
      <OtpInput
        value="12"
        onChange={handleChange}
        numInputs={4}
        separator={<span>-</span>}
        inputType="text"
        isDisabled={false}
        isInputNum={false}
      />
    );

    const inputs = screen.getAllByRole("textbox");
    console.log("🚀 ~ inputs:", inputs);

    inputs[1].focus();
    fireEvent.keyDown(inputs[1], { key: "Backspace" });

    expect(document.activeElement).toBe(inputs[0]);
  });

  test("blocks alphabetic input when isInputNum=true", () => {
    const handleChange = vi.fn();

    render(
      <OtpInput
        value=""
        onChange={handleChange}
        numInputs={4}
        separator={<span>-</span>}
        inputType="number"
        isDisabled={false}
        isInputNum={true}
      />
    );

    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "a" } });

    // value should not change
    expect(handleChange).not.toHaveBeenCalled();
  });

  test("handles paste full OTP correctly", () => {
    const handleChange = vi.fn();

    render(
      <OtpInput
        value=""
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputType="text"
        isDisabled={false}
        isInputNum={false}
      />
    );

    const inputs = screen.getAllByRole("textbox");

    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => "123456" }
    });

    expect(handleChange).toHaveBeenCalledWith("123456");
  });

  test("trims pasted OTP if longer than allowed", () => {
    const handleChange = vi.fn();

    render(
      <OtpInput
        value=""
        onChange={handleChange}
        numInputs={4}
        separator={<span>-</span>}
        inputType="text"
        isDisabled={false}
        isInputNum={false}
      />
    );

    const inputs = screen.getAllByRole("textbox");

    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => "987654" }
    });

    expect(handleChange).toHaveBeenCalledWith("9876");
  });
});
