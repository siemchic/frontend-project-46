const spacesCount = 3;
const getIndent = (depth) => ' '.repeat(spacesCount * depth - 2);

const style = (data) => {
  const iter = (node, depth) => {
    const name = node.keyName;
    const nodeType = node.type;
    if (nodeType === 'deleted') {
      return `${getIndent(depth)}- ${name}: ${node.value1}`;
    }
    if (nodeType === 'added') {
      return `${getIndent(depth)}+ ${name}: ${node.value2}`;
    }
    if (nodeType === 'changed') {
      const str1 = `${getIndent(depth)}- ${name}: ${node.value1}`;
      const str2 = `${getIndent(depth)}+ ${name}: ${node.value2}`;
      return [str1, str2];
    }
    if (nodeType === 'object') {
      const arr = node.children.flatMap((child) => iter(child, depth + 1));
      return `${getIndent(depth)}  ${name}: {\n${arr.join('\n')}\n${getIndent(depth)}  }  `;
    }
    return `${getIndent(depth)}  ${name}: ${node.value}`;
  };
  const resultArray = data.flatMap((node) => iter(node, 1));
  const resultString = `{\n${resultArray.join('\n')}\n}`;
  return resultString;
};
export default style;
