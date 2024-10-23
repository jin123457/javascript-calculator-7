import { ERROR_MESSAGE } from '../Constants/ErrorMassage.js';
import { REGEX } from '../Constants/Regex.js';

const ValidateInputData = (userInput, delimiterSet, isIncludeCustom) => {
  const VALID_REGEX = new RegExp(
    `[^${[...new Set([...delimiterSet])].join('|')}|\\d+${isIncludeCustom ? `|${REGEX.CUSTOM_DELIMITER_CREATION_ESSENTIALS}` : ''}]`,
    'g',
  );

  if (userInput.match(VALID_REGEX) === null) {
    return userInput.match(REGEX.NUMBER);
  }

  throw new Error(
    `${ERROR_MESSAGE.HEADER}${ERROR_MESSAGE.INCLUDE_NOT_DELIMITERS}`,
  );
};

export default ValidateInputData;
