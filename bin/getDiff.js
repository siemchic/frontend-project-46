import _ from 'lodash';

const getDiff = (file1, file2) => {
  const result = [];
  const keys = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keyses = _.sortBy(_.union(keys, keys2));

  for (const key of keyses) {
    const haskey1 = Object.hasOwn(file1, key);
    const haskey2 = Object.hasOwn(file2, key);
    if (haskey1 && !haskey2) {
      result.push(`  - ${key} : ${file1[key]}`);
      continue;
    }
    if (!haskey1 && haskey2) {
      result.push(`  + ${key} : ${file2[key]}`);
      continue;
    }
    if (file1[key] === file2[key]) {
      result.push(`    ${key} : ${file2[key]}`);
      continue;
    } else {
      result.push(`  - ${key} : ${file1[key]}`);
      result.push(`  + ${key} : ${file2[key]}`);
    }
  }
  console.log(result);
  return `{\n${result.join('\n')}\n}`;
};
export default getDiff;
