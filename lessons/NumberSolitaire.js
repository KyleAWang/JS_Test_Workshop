function solution(A) {
  if (!Array.isArray(A) || A.length === 0) {
    return 0;
  }

  let index = 0;
  let sum = A[0];
  while (index + 6 < A.length) {
    let map = maxValue(A.slice(index + 1, index + 7));
    sum += map.get('sum');
    index += map.get('index')+1;
  }
  if (index + 6 >= A.length && index < A.length -1) {
    const mapE = maxValue(A.slice(index + 1, A.length-1));
    if (mapE) {
      if (mapE.get('sum') > 0) {
        sum += mapE.get('sum');
      }
    }
    sum += A[A.length-1];
  }
  return sum;
}

function maxValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  let sum = 0;
  let curIndex = 0;
  let neIndex = 0;
  const result = new Map();
  let maxValue = arr.reduce((acc, cur, index) => {
    acc = Math.max(acc, cur);
    if (cur > 0) {
      sum += cur;
      curIndex = index;
    } else {
      if (acc === cur) {
        neIndex = index;
      }
    }
    return acc;
  }, arr[0]);
  if (maxValue < 0) {
    result.set('index', neIndex);
    result.set('sum', maxValue);
  } else {
    result.set('index', curIndex);
    result.set('sum', sum);
  }
  return result;
}


const A = [-2, -5, -1, -8, -2, -9, -10, -22, -2, -6];
try {
  console.log(solution(A));
} catch(err) {
  console.log(err);
}