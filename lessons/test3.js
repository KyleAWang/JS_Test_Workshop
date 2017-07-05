function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  let poIndex = 0;
  let tripArray = []
  A.map((cur, index, arr) => {
    console.log(cur);
    if (tripArray.indexOf(cur) === -1) {
      tripArray.push(cur);
      poIndex = tripArray.length;
    } else if (tripArray[0] === cur) {
      tripArray.push(cur);
      tripArray = tripArray.slice(1, tripArray.length);
      poIndex = tripArray.length;
      if (arr[index - 1] === tripArray[0]) {
        tripArray = tripArray.slice(1, tripArray.length);
        poIndex = tripArray.length;
      }
    } else {
      tripArray.push(cur);
    }
    console.log(tripArray);
  });
  console.log('po index', poIndex);
  if (poIndex > 0 && poIndex < A.length) {
    tripArray = tripArray.slice(0, poIndex);
  }

  let result = Array.from(tripArray).slice(0, tripArray.length);
  for (let i = 0; i < tripArray.length; i++) {
    const temp = Array.from(result).slice(1, tripArray.length);
    if (temp.indexOf(tripArray[i])) {
      result = Array.from(temp);
    }
  }
  console.log(tripArray);
  return tripArray.length;
}

const A = [7, 3, 7, 3, 1, 3, 4, 1];
const B = [7, 3, 7, 3, 1, 3, 4, 1, 2, 4, 3, 7, 7];
console.log(solution(B));