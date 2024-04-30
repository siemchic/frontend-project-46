import parser from '../bin/parser.js';
import getDiff from '../bin/getDiff.js';
import formatData from '../formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const files = parser(filepath1, filepath2);
  const diff = getDiff(files.fileContent, files.fileContent2);
  const formatedResult = formatData(diff, format);
  return formatedResult;
};
export default genDiff;
