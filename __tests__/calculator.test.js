import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('정상적으로 테스트 통과하는 경우', () => {
  const successArr = [
    { name: '1,2,3은 결과 : 6', inputs: ['1,2,3'], outputs: ['결과 : 6'] },
  ];
  successArr.map((success) => {
    it(`${success.name}`, async () => {
      mockQuestions(success.inputs);

      const logSpy = getLogSpy();

      const app = new App();
      await app.run();

      success.outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
    return success;
  });
});

describe('예외처리', () => {
  const successArr = [
    { name: '1,2,3은 결과 : 6', inputs: ['1,2,3'], outputs: ['결과 : 6'] },
  ];
  successArr.map((success) => {
    it(`${success.name}`, async () => {
      mockQuestions(success.inputs);

      const logSpy = getLogSpy();

      const app = new App();
      await app.run();

      success.outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });
    return success;
  });
});
