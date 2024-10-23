import { ERROR_MESSAGE } from '../Constants/ErrorMassage.js';
import { REGEX } from '../Constants/Regex.js';
import NumberSum from '../Utils/NumberSum.js';

export default function ValidateInputData({
  userInput,
  delimiterSet,
  isIncludeCustom,
}) {
  const VALID_REGEX = new RegExp(
    `[^${[...new Set([...delimiterSet])].join('|')}|\\d+${isIncludeCustom ? `|${REGEX.CUSTOM_DELIMITER_CREATION_ESSENTIALS}` : ''}]`,
    'g',
  );

  if (userInput.match(VALID_REGEX) !== null) {
    throw new Error(
      `${ERROR_MESSAGE.HEADER}${ERROR_MESSAGE.INCLUDE_NOT_DELIMITERS}`,
    );
  }

  const parseNumbers = userInput.match(REGEX.NUMBER);
  return NumberSum(parseNumbers);
}
