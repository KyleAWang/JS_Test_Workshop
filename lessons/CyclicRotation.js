function solution(A, K){
  const step = K % A.length;
  return A.reduce((acc, cur, index, arr) => {
    if (index + step < arr.length) {
      acc[index + step] = cur;
    } else {
      acc[(index + step) % arr.length] = cur;
    }
    return acc;
  }, [])
}