function s(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.log(0, 0);
    return;
  }
  arr = arr.sort();
  let min = 0;
  let max = 0;
  console.log(arr);
  arr.map((cur, index, arr) => {
    if (index !== 0) {
      max += cur;
    }
    if (index !== arr.length-1) {
      min += cur;
    }
  });
  console.log(min, max);

}

const arr = [3, 2, 1, 5, 6, 7];
s(arr);