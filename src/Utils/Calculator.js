import CheckDelimiter from './CheckDelimiter.js';
import FindNumberCount from './FindNumberCount.js';
import ValidateInputData from '../Validation/ValidateInputData.js';

const Calculator = (userInput) => {
  if (userInput.length === 0) {
    return 0;
  }

  const numberCount = FindNumberCount(userInput);

  if (numberCount < 2) {
    return parseInt(userInput, 10);
  }

  const { delimiterSet, findCustom } = CheckDelimiter(userInput);
  const parseNumbers = ValidateInputData(userInput, delimiterSet, findCustom);
  const RESULT = parseNumbers.reduce((p, n) => {
    return parseInt(p, 10) + parseInt(n, 10);
  }, 0);
  return RESULT;
};

export default Calculator;
