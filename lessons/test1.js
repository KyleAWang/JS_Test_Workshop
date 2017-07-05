function solution(N) {
  // write your code in JavaScript (Node.js 6.4.0)
  if (isNaN(N)) {
    return 0;
  }
  const str = ''+ N;
  const arr = str.split('');
  const sortA  = arr.sort((a, b) => (b - a));

  return Number.parseInt(sortA.join(''));
}

console.log(solution(89009898));
