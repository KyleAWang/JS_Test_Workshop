const should = require('should');
const strTest = require('./app');

describe('String tests ', () => {
  it('should return array with reverse alphabet order', () => {
    const target = ['D', 'C', 'B', 'A'];
    const str = 'AAAABBBCCDAABBB';
    strTest();
  });
});
