const ERROR_MESSAGE = Object.freeze({
  HEADER: '[ERROR] ',
  NOT_FOUND_DELIMITER: '구분자 혹은 커스텀 구분자가 존재하지 않습니다.',
  INCLUDE_NOT_DELIMITERS: '구분자와 양수 이외에 문자가 포함되어있습니다.',
  NUMBER_REQUIRED: '숫자가 최소 한 개 이상 필요합니다.',
  INCLUDE_MINUS: '음수는 문자열에 포함될 수 없습니다.',
});

const USER_MESSAGE = Object.freeze({
  RESULT: '결과 : ',
  USER_INPUT: '덧셈할 문자열을 입력해 주세요.\n',
});

const REGEX = Object.freeze({
  FIND_COMMA: '(?<=\\d+)(,)(?=\\d+)',
  FIND_COLON: '(?<=\\d+)(:)(?=\\d+)',
  FIND_CUSTOM_DELIMITER: '(?<=//)(.*?)(?=\\\\n)',
  FIND_MINUS: /-\d+/g,
  TWO_HYPEN_BETWEEN_NUMBER: /\d+-{2}\d+/,
  NOT_DELIMITER_HYPEN: /[^\d+]-\d+/,
  FIND_CUSTOM: /(?<=\/\/)(.*?)(?=\\n)/g,
  CUSTOM_DELIMITER_CREATION_ESSENTIALS: /\/\/|\\\\n/,
  NUMBER: /\d+/g,
  NOT_NUMBER: /[^\d+]/g,
});

export { ERROR_MESSAGE, USER_MESSAGE, REGEX };
