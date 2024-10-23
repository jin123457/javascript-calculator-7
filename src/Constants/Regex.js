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

export { REGEX };
