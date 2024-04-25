#!/usr/bin/env node
import { Command } from 'commander';
import parser from './parser.js';
import getDiff from './getDiff.js';
import style from './stylish.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, format = 'stylish') => {
    const files = parser(filepath1, filepath2);
    const diff = getDiff(files.fileContent, files.fileContent2);
    const styleTree = style(diff, format);
    console.log(styleTree);
  });

program.parse();
