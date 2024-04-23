const style = (data) => {
  const iter = (node, depth) => {
    const name = node.keyName;
    const nodeType = node.type;
    if (nodeType === 'deleted') {
      return ` - ${name}: ${node.value1}`;
    }
    if (nodeType === 'added') {
      return ` + ${name}: ${node.value2}`;
    }
    if (nodeType === 'changed') {
      const str1 = ` - ${name}: ${node.value1}`;
      const str2 = ` + ${name}: ${node.value2}`;
      return [str1, str2];
    }
    if (nodeType === 'nested') {
      const arr = node.children.flatMap((child) => iter(child, depth + 1));
      return `  ${name}: {\n${arr.join('\n')}\n}  }`;
    }
    return `  ${name}: ${node.value}`;
  };
  const resultArray = data.flatMap((node) => iter(node, 1));
  const resultString = `{\n${resultArray.join('\n')}\n}`;
  return resultString;
};
export default style;
