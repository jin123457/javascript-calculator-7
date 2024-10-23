import CheckDelimiter from './CheckDelimiter.js';
import FindNumberCount from './FindNumberCount.js';

const Calculator = (userInput) => {
  if (userInput.length === 0) {
    return 0;
  }

  if (FindNumberCount(userInput)) {
    return parseInt(userInput, 10);
  }

  return CheckDelimiter(userInput);
};

export default Calculator;
