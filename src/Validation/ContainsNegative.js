import { ERROR_MESSAGE, REGEX } from '../Constants.js';

export default function ContainsNegative(userInput) {
  if (userInput.match(REGEX.FIND_MINUS)) {
    throw new Error(`${ERROR_MESSAGE.HEADER}${ERROR_MESSAGE.INCLUDE_MINUS}`);
  }

  return true;
}
