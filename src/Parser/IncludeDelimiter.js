import { ERROR_MESSAGE } from '../Constants/ErrorMassage.js';
import { REGEX } from '../Constants/Regex.js';
import IncludeMinus from '../Validation/IncludeMinus.js';

export default function IncludeDelimiter(userInput) {
  const findDelimiterRegExp = new RegExp(
    `${REGEX.FIND_COMMA}|${REGEX.FIND_COLON}|${REGEX.FIND_CUSTOM_DELIMITER}`,
    'g',
  );

  const includeDelimiter = userInput.match(findDelimiterRegExp);

  if (includeDelimiter == null) {
    throw new Error(
      `${ERROR_MESSAGE.HEADER}${ERROR_MESSAGE.NOT_FOUND_DELIMITER}`,
    );
  }

  if (IncludeMinus({ includeDelimiter, userInput })) {
    return includeDelimiter;
  }
}
