const getRandomChar = str => str[Math.floor(Math.random() * str.length)];

export const generatePassword = (
  length,
  includeNumbers,
  includeSpecialChars
) => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = lowercase + uppercase;
  if (includeNumbers) characters += numbers;
  if (includeSpecialChars) characters += specialChars;

  // Ensure at least one character from each selected category
  let password = getRandomChar(lowercase) + getRandomChar(uppercase);

  if (includeNumbers) {
    password += getRandomChar(numbers);
  }

  if (includeSpecialChars) {
    password += getRandomChar(specialChars);
  }

  // Fill the rest with random characters
  const remainingLength = length - password.length;
  for (let i = 0; i < remainingLength; i++) {
    password += getRandomChar(characters);
  }

  // Shuffle the password to mix the required characters
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

export const calculateStrength = (
  password,
  { minLength = 8, requireNumbers = true, requireSpecialChars = true }
) => {
  let score = 0;
  const feedback = [];

  // Length check
  if (password.length >= minLength) score += 1;
  else
    feedback.push(`Password should be at least ${minLength} characters long`);

  // Character variety
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push("Include lowercase letters");

  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("Include uppercase letters");

  if (/[0-9]/.test(password)) score += 1;
  else if (requireNumbers) feedback.push("Include numbers");

  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  else if (requireSpecialChars) feedback.push("Include special characters");

  // Additional points for length
  if (password.length >= 14) score += 1;
  if (password.length >= 18) score += 1;

  // Determine strength level
  const levels = ["very-weak", "weak", "medium", "strong", "very-strong"];
  let level =
    score >= 6
      ? levels[4]
      : score === 5
      ? levels[3]
      : score >= 3
      ? levels[2]
      : score === 2
      ? levels[1]
      : levels[0];

  return { level, score, feedback };
};
