import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const USER_STR = await MissionUtils.Console.readLineAsync("");
  }
}

export default App;
