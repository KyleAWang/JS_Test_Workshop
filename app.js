function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  if (!Array.isArray(A) || A.length == 0) {
    return 0;
  }
  let highest = 0;
  let lowest = 0;
  let max = 0;
  console.log('c h l m a');
  return A.reduce((acc, cur) => {
      if (cur > highest) {
        max = highest - lowest > max? highest-lowest: max;
        acc = acc < max? max: acc;
        highest = cur;
        lowest = cur;
        max = 0;
      } else if (cur > lowest) {
        max = max > cur - lowest? max: cur - lowest;
        acc = acc < max? max: acc;
      } else if (cur < lowest) {
        lowest = cur;
      }
      console.log(cur, highest, lowest, max, acc);
      return acc;
  }, 0);
}

const A = [1,1, 1, 1, 1];
console.log(solution(A));