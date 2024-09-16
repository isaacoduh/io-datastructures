var MinStack = function () {
  this.stk1 = [];
  this.stk2 = [Infinity];
};

MinStack.prototype.push = function (val) {
  this.stk1.push(val);
  this.stk2.push(Math.min(this.stk2[this.stk2.length - 1], val));
};

MinStack.prototype.pop = function () {
  this.stk1.pop();
  this.stk2.pop();
};

MinStack.prototype.top = function () {
  return this.stk1[this.stk1.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.stk2[this.stk2.length - 1];
};
