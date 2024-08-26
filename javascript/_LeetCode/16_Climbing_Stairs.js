var climbStairs = function (n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
};
