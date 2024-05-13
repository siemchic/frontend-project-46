/* eslint-disable no-undef */
import * as fs from 'fs';
import getDiff from '../bin/getDiff.js';
import parser from '../bin/parser.js';
import style from '../formatters/stylish.js';
import plain from '../formatters/plain.js';
import json from '../formatters/JSON.js';

const JSON1 = '__fixtures__/file1.json';
const JSON2 = '__fixtures__/file2.json';
const filesJSON = parser(JSON1, JSON2);
const YAML1 = '__fixtures__/file1.yaml';

const diffJSON = getDiff(filesJSON.fileContent, filesJSON.fileContent2);

const fileStylish = fs.readFileSync('__fixtures__/referStyle', 'utf-8');
const filePlain = fs.readFileSync('__fixtures__/referPlain', 'utf-8');
const fileJSON = fs.readFileSync('__fixtures__/referJSON', 'utf-8');

test('expected stylish', () => {
  expect(style(diffJSON)).toBe(fileStylish);
});
test('expected plain', () => {
  expect(plain(diffJSON)).toBe(filePlain);
});
test('false format', () => {
  expect(parser(JSON1, YAML1)).toBe('Unknow format');
});
test('expected json', () => {
  expect(json(diffJSON)).toBe(fileJSON);
});
