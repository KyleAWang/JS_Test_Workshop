var yourself = {
  fibonacci : function(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    else {
      return this.fibonacci(n - 1) +
        this.fibonacci(n - 2);
    }
  }
};

console.log(yourself.fibonacci(20));