import * as path from 'path';
import * as fs from 'fs';

const readthefile = (filepath1, filepath2) => {
  const rezult = path.resolve(filepath1);
  const rezult2 = path.resolve(filepath2);
  const fileContent = fs.readFileSync(rezult, 'utf-8');
  const fileContent2 = fs.readFileSync(rezult2, 'utf-8');
  console.log(fileContent);
  console.log(fileContent2);
};
export default readthefile;
