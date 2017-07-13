module.exports.strTest = function strTest(str) {
  let resultMap = [];
  if (!str || str.length === 0) {
    return [];
  }

  str = str.replace(/ /g, '');
  if (str.length === 0) {
    return []
  }
  str = str.toUpperCase();
  const matchStr = str.match(/[A-Z]/g);

  if (str.length !== matchStr.length)
    throw new Error('IllegalArgumentException');

  const strArr = str.split('');
  strArr.map((cur, index, arr) => {
    if (resultMap.indexOf(cur) === -1) {
      resultMap.push(cur);
    }
  });
  resultMap.sort((a, b) => b > a);

  return resultMap;
};


const str = 'FD FEWFQWSA DFSG';


console.log(this.strTest(null));

