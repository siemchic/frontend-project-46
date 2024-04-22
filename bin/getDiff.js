import _ from 'lodash';

const getDiff = (file1, file2) => {
  const result = [];
  const keys = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keyses = _.sortBy(_.union(keys, keys2));

  for (const key of keyses) {
    const haskey1 = Object.hasOwn(file1, key);
    const haskey2 = Object.hasOwn(file2, key);
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      result.push(`${key} ${getDiff(file1[key], file2[key])}`);
    } else if (_.isObject(file1[key])) {
      result.push(`  - ${key} : ${file1[key]}`);
    } else if (_.isObject(file2[key])) {
      result.push(`  + ${key} : ${file2[key]}`);
    } else if (haskey1 && !haskey2) {
      result.push(`  - ${key} : ${file1[key]}`);
    } else if (!haskey1 && haskey2) {
      result.push(`  + ${key} : ${file2[key]}`);
    } else if (file1[key] === file2[key]) {
      result.push(`    ${key} : ${file2[key]}`);
    } else {
      result.push(`  - ${key} : ${file1[key]}`);
      result.push(`  + ${key} : ${file2[key]}`);
    }
  }
  return `{\n${result.join('\n')}\n}`;
};
export default getDiff;
