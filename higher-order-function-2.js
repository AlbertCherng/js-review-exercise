function multiply(x) {
  return function(y) {
    return x * y;
  }
}


(multiply(4)(6)); // 24