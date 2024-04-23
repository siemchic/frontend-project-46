import _ from 'lodash';

const getDiff = (file1, file2) => {
  const keys = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const keyses = _.sortBy(_.union(keys, keys2));

  const result = keyses.map((key) => {
    if (!_.has(file1, key)) {
      return { keyName: key, type: 'added', value2: file2[key] };
    }
    if (!_.has(file2, key)) {
      return { keyName: key, type: 'deleted', value1: file1[key] };
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { keyName: key, type: 'nested', children: getDiff(file1[key], file2[key]) };
    }
    if (file1[key] !== file2[key]) {
      return {
        keyName: key, type: 'changed', value1: file1[key], value2: file2[key],
      };
    }
    return { keyName: key, type: 'unchanged', value: file1[key] };
  });
  return result;
};
export default getDiff;
