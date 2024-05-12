import _ from 'lodash';

const isAnObject = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return `${value}`;
};

const plain = (data) => {
  const iter = (node, firstKey = '') => {
    const name = node.keyName;
    const nodeType = node.type;
    const fullName = firstKey ? `${firstKey}.${name}` : `${name}`;
    // fullName = firstKey ? `${name}` : `${firstKey}.${name}`;
    if (nodeType === 'deleted') {
      return `Property '${fullName}' was removed`;
    }
    if (nodeType === 'added') {
      return `Property '${fullName}' was added with value: ${isAnObject(node.value2)}`;
    }
    if (nodeType === 'changed') {
      return `Property '${fullName}' was updated. From ${isAnObject(node.value1)} to ${isAnObject(node.value2)}`;
    }
    if (nodeType === 'object') {
      const arr = node.children.flatMap((child) => iter(child, fullName));
      return `${arr.join('\n')}`;
    }
    return [];
  };
  const resultArray = data.flatMap((node) => iter(node));
  const resultString = `${resultArray.join('\n')}`;
  return resultString;
};
export default plain;
