{
  common: {
    + follow: false
      setting1: Value 1
    - setting2: 200
    - setting3: true
    + setting3: null
    + setting4: blah blah
    + setting5: [object Object]
      setting6: {
          doge: {
            - wow:
            + wow: so much
          }
          key: value
        + ops: vops
      }
  }
  group1: {
    - baz: bas
    + baz: bars
      foo: bar
    - nest: [object Object]
    + nest: str
  }
- group2: [object Object]
+ group3: [object Object]
}