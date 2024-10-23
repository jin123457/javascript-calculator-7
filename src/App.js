import { Console } from '@woowacourse/mission-utils';
import Calculator from './Utils/Calculator.js';
import { USER_MESSAGE } from './Constants.js';

class App {
  async run() {
    const userInput = await Console.readLineAsync(`${USER_MESSAGE.USER_INPUT}`);
    const RESULT = Calculator(userInput);
    Console.print(`${USER_MESSAGE.RESULT}${RESULT}`);
  }
}

export default App;
