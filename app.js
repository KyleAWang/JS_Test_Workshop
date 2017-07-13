module.exports.strTest = function strTest(str) {
  let resultMap = [];
  if (!str || str !== '') {
    return resultMap;
  }
  str = str.toUpperCase();
  str = str.replace(/ /g, '');
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


const str = '   ';


console.log(this.strTest(str));

