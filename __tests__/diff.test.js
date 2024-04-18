import * as fs from 'fs';
import getDiff from '../bin/getDiff.js';
import readthefile from '../bin/readTheFile.js';

const refGetDiff = fs.readFileSync('__fixtures__/referenceGetDiff.js', 'utf-8');
  const JSON1 = 'bin/file1.json';
  const JSON2 = 'bin/file2.json';
  const files = readthefile(JSON1, JSON2);
test('expected GetDiff', () => {
  expect(getDiff(files.fileContent, files.fileContent2)).toBe(refGetDiff);
});
