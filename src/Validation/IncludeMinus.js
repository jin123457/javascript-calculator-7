import { REGEX } from '../Constants.js';
import ContainsNegative from './ContainsNegative.js';

export default function IncludeMinus({ delimiter, userInput }) {
  if (
    delimiter.indexOf('-') === -1 ||
    REGEX.TWO_HYPEN_BETWEEN_NUMBER.test(userInput) ||
    REGEX.NOT_DELIMITER_HYPEN.test(userInput)
  ) {
    return ContainsNegative(userInput);
  }

  return true;
}
