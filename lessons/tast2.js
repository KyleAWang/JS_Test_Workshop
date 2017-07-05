function solution(n) {
  d = new Array(30);
  l = 0;
  console.log('n:', n.toString(2));
  while (n > 0) {
    d[l] = n % 2;
    n = Math.floor(n / 2);
    l += 1;
  }
  d = d.slice(0, l).reverse();
  console.log('l:', l, 'd:', d);
  for (p = 1; p < 1 + l; ++p) {
    console.log('p:', p);
    ok = true;
    for (i = 0; i < l - p; ++i) {
      console.log('i:', i);
      console.log('d[i]:', d[i], 'd[i+p]:', d[i+p]);
      if (d[i] != d[i + p]) {
        ok = false;
        break;
      }
    }
    if (ok) {
      return p;
    }
  }
  return -1;
}
console.log(solution(955));
