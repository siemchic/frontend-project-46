import _ from 'lodash';

const spacesCount = 4;
const getIndent = (depth) => ' '.repeat(spacesCount * depth - 2);

const objectObject = (data, depth) => {
  if (data === null) {
    return `${data}`;
  }
  if (typeof data === 'object') {
    const arrar = Object.entries(data).map(([key, value]) => `${' '.repeat(spacesCount * depth + 2)}  ${key}: ${objectObject(value, depth + 1)}`);
    return `{\n${arrar.join('\n')}\n${' '.repeat(spacesCount * depth)}}`;
  }
  return `${data}`;
};

const style = (data) => {
  const iter = (node, depth) => {
    const name = node.keyName;
    const nodeType = node.type;

    if (nodeType === 'deleted') {
      return `${getIndent(depth)}- ${name}: ${objectObject(node.value1, depth)}`;
    }
    if (nodeType === 'added') {
      return `${getIndent(depth)}+ ${name}: ${objectObject(node.value2, depth)}`;
    }
    if (nodeType === 'changed') {
      const str1 = `${getIndent(depth)}- ${name}: ${objectObject(node.value1, depth)}`;
      const str2 = `${getIndent(depth)}+ ${name}: ${objectObject(node.value2, depth)}`;
      return [str1, str2];
    }
    if (nodeType === 'object') {
      const arr = node.children.flatMap((child) => iter(child, depth + 1));
      return `${getIndent(depth)}  ${name}: {\n${arr.join('\n')}\n${getIndent(depth)}  }`;
    }
    return `${getIndent(depth)}  ${name}: ${node.value}`;
  };
  const resultArray = data.flatMap((node) => iter(node, 1));
  const resultString = `{\n${resultArray.join('\n')}\n}`;
  return resultString;
};
export default style;

// доп функция на проверку обьекта
