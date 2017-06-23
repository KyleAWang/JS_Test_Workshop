
function OddOccurrencesInArray(A){
  if (!Array.isArray(A)) {
    return A;
  }
  A = A.sort();
  if (A.length == 1) {
    return A[0];
  }
  let res = A.filter((cur, index, arr) => {
    if (index % 2 === 0 && (index+1) < arr.length) {
      return cur !== arr[index+1];
    } else if (index === arr.length-1){
      return true;
    } else {
      return false;
    }
  });
  return res[0]
}
