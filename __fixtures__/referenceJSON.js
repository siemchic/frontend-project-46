[{
  keyName: 'common',
  type: 'object',
  children: [{ keyName: 'follow', type: 'added', value2: false }, { keyName: 'setting1', type: 'unchanged', value: 'Value 1' }, { keyName: 'setting2', type: 'deleted', value1: 200 }, {
    keyName: 'setting3', type: 'changed', value1: true, value2: null,
  }, { keyName: 'setting4', type: 'added', value2: 'blah blah' }, { keyName: 'setting5', type: 'added', value2: { key5: 'value5' } }, {
    keyName: 'setting6',
    type: 'object',
    children: [{
      keyName: 'doge',
      type: 'object',
      children: [{
        keyName: 'wow', type: 'changed', value1: '', value2: 'so much',
      }],
    }, { keyName: 'key', type: 'unchanged', value: 'value' }, { keyName: 'ops', type: 'added', value2: 'vops' }],
  }],
}, {
  keyName: 'group1',
  type: 'object',
  children: [{
    keyName: 'baz', type: 'changed', value1: 'bas', value2: 'bars',
  }, { keyName: 'foo', type: 'unchanged', value: 'bar' }, {
    keyName: 'nest', type: 'changed', value1: { key: 'value' }, value2: 'str',
  }],
}, { keyName: 'group2', type: 'deleted', value1: { abc: 12345, deep: { id: 45 } } }, { keyName: 'group3', type: 'added', value2: { deep: { id: { number: 45 } }, fee: 100500 } }];
