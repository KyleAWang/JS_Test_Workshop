function sol(input) {

  if (!input|| input.length === 0){
    return 0;
  }

  const sAtr = input.replace(/ /g, '').split('');
  const tempArr = [];
  const dupliArr = []
  let result = 0;

  sAtr.map((cur, index, arr) => {
    if (index < arr.length - 3) {
      const temp = arr.slice(index, index + 4);

      const tempStr = temp.join('');
      if (tempArr.indexOf(tempStr) !== -1) {
        if (dupliArr.indexOf(tempStr) === -1){
          result++;
          dupliArr.push(tempStr);
        }
      } else {
        tempArr.push(tempStr)
      }
    }
  });
  return result;
}

const A = 'three lions and three lionesses';
const B = 'BatMan vs SuperMan vs WonderWoman Manv'
console.log(sol('  '));