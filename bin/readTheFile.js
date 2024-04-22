import * as path from 'path';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
// eslint-disable-next-line import/no-unresolved
import _ from 'lodash';

const readthefile = (filepath1, filepath2) => {
  const rezult = path.resolve(filepath1);
  const rezult2 = path.resolve(filepath2);
  const fileContent = fs.readFileSync(rezult, 'utf-8');
  const fileContent2 = fs.readFileSync(rezult2, 'utf-8');
  const format1 = path.extname(filepath1);
  const format2 = path.extname(filepath2);
  if (format1 === '.json' && format2 === '.json') {
    return { fileContent: JSON.parse(fileContent), fileContent2: JSON.parse(fileContent2) };
  }
  if (format1 === '.yaml' && format2 === '.yaml') {
    return { fileContent: yaml.load(fileContent), fileContent2: yaml.load(fileContent2) };
  }
  return false;
};
export default readthefile;
