import { ERROR_MESSAGE, REGEX } from '../Constants.js';

export default function FindNumberCount(userInput) {
  const digits = userInput.match(REGEX.NUMBER);

  if (digits == null) {
    throw new Error(`${ERROR_MESSAGE.HEADER}${ERROR_MESSAGE.NUMBER_REQUIRED}`);
  }

  if (digits.length === 1 && userInput[0] === '-') {
    throw new Error(`${ERROR_MESSAGE.HEADER}${ERROR_MESSAGE.INCLUDE_MINUS}`);
  }
}
