function sol(input) {
  if (isNaN(input)) {
    return 'no';
  }
  const root = Math.cbrt(input);
  if (!Number.isInteger(root)) {
    return 'no';
  }

  if (root < 0 || root > 30) {
    return 'no';
  }

  for (let i = 2; i < root; i++) {
    if (root % i === 0) {
      return 'no'
    }
  }

  return 'yes';
}

const A = 27;
console.log(sol(27000));