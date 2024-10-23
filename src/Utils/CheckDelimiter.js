import { REGEX } from '../Constants/Regex.js';
import IncludeDelimiter from '../Parser/IncludeDelimiter.js';
import ValidateInputData from '../Validation/ValidateInputData.js';

export default function CheckDelimiter(userInput) {
  const delimiterSet = new Set([...IncludeDelimiter(userInput)]);
  const isIncludeCustom = REGEX.FIND_CUSTOM.test(userInput);

  return ValidateInputData({ userInput, delimiterSet, isIncludeCustom });
}
