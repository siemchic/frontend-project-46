import plain from './plain.js';
import style from './stylish.js';
import json from './JSON.js';

const formatData = (diff, formatName) => {
  if (formatName === 'plain') {
    return plain(diff);
  }
  if (formatName === 'stylish') {
    return style(diff);
  }
  if (formatName === 'json') {
    return json(diff);
  }
  return 'bad result';
};
export default formatData;
