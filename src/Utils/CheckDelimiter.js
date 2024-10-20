import ContainsNegative from './ContainsNegative.js';

const CheckDelimiter = (str) => {
  const FIND_DELIMITER = str.match(
    /(?<=\d+)(,)(?=\d+)|(?<=\d+)(:)(?=\d+)|(?<=\/\/)(.*?)(?=\\n)/g,
  );

  if (FIND_DELIMITER == null) {
    throw new Error(`[ERROR] 구분자 혹은 커스텀 구분자가 존재하지 않습니다.`);
  }

  if (
    FIND_DELIMITER.indexOf('-') === -1 ||
    /\d+-{2}\d+/.test(str) ||
    /[^\d+]-\d+/.test(str)
  ) {
    ContainsNegative(str);
  }
  const DELIMITER_SET = new Set([...FIND_DELIMITER]);
  const FIND_CUSTOM_REGEX = /(?<=\/\/)(.*?)(?=\\n)/g.test(str);

  return [DELIMITER_SET, FIND_CUSTOM_REGEX];
};

export default CheckDelimiter;
