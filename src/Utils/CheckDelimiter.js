import { REGEX } from '../Constants.js';
import IncludeDelimiter from '../Parser/IncludeDelimiter.js';

export default function CheckDelimiter(userInput) {
  const delimiterSet = new Set([...IncludeDelimiter(userInput)]);
  const isIncludeCustom = REGEX.FIND_CUSTOM.test(userInput);

  return { delimiterSet, isIncludeCustom };
}
