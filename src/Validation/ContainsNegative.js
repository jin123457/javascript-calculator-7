import { ERROR_MESSAGE } from '../Constants/ErrorMassage.js';
import { REGEX } from '../Constants/Regex.js';

export default function ContainsNegative(userInput) {
  if (userInput.match(REGEX.FIND_MINUS)) {
    throw new Error(`${ERROR_MESSAGE.HEADER}${ERROR_MESSAGE.INCLUDE_MINUS}`);
  }

  return true;
}
