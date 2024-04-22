import * as fs from 'fs';
import getDiff from '../bin/getDiff.js';
import parser from '../bin/parser.js';

const JSON1 = 'bin/file1.json';
const JSON2 = 'bin/file2.json';
const filesJSON = parser(JSON1, JSON2);
const YAML1 = 'bin/file1.yaml';
const YAML2 = 'bin/file1.yaml';
const filesYAML = parser(YAML1, YAML2);

const refGetDiff = fs.readFileSync('__fixtures__/referenceGetDiff.js', 'utf-8');

test('expected GetDiffJSON', () => {
  expect(getDiff(filesJSON.fileContent, filesJSON.fileContent2)).toBe(refGetDiff);
});
test('expected GetDiffYAML', () => {
  expect(getDiff(filesYAML.fileContent, filesYAML.fileContent2)).toBe(refGetDiff);
});
