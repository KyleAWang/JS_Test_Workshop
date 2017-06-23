function solutionB(A) {
  if (!Array.isArray(A) || A.length === 0) {
    return 1;
  }
  const sum = A.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const n = A.length + 1;
  let result = n*(n+1)/2 - sum;
  return  result === 0? n : result;
}