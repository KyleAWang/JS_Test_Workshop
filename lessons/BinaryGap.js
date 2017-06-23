function BinaryGap(N) {
  // Convert N to binary
  let bin = N.toString(2);

  if (bin.lastIndexOf(1) != bin.length-1) {
    bin = bin.slice(0, bin.lastIndexOf(1));
  }
  bin = bin.split('1');

  return bin.reduce((acc, cur) => {
      if (acc < cur.length) {
        acc = cur.length;
      }
      return acc;
    }) || 0;
}


module.exports = BinaryGap;