/** stack, design, queue */

class MyQueue {
  stk1;
  stk2;

  constructor() {
    this.stk1 = [];
    this.stk2 = [];
  }

  push(x) {
    this.stk1.push(x);
  }

  pop() {
    this.move();
    return this.stk2.pop();
  }

  peek() {
    this.move();
    return this.stk2.at(-1);
  }

  empty() {
    return !this.stk1.length && !this.stk2.length;
  }

  move() {
    if (!this.stk2.length) {
      while (this.stk1.length) {
        this.stk2.push(this.stk1.pop());
      }
    }
  }
}

var MyQueue = function () {
  this.input = [];
  this.output = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.input.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.output.length == 0) {
    while (this.input.length > 0) {
      this.output.push(this.input.pop());
    }
  }
  return this.output.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.output.length == 0) {
    while (this.input.length > 0) {
      this.output.push(this.input.pop());
    }
  }
  return this.output[this.output.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.input.length == 0 && this.output.length == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * Solution: Double Stack
 * use two stacks, where stk1 is used for enqueue, and stk2 is used for dequeue
 * when enqueing, we directly push the element into stk1. The time complexity is 0(1)
 * When dequeing, we first check whethere stk2 is empty. if it is empty, we pop all the elements from stk1, and push into stk2. then pop the element from stk2.
 * if stk2 is not empty, we directly get the top element from stk2. The amoritized time complexity is 0(1).
 * when checking whether the queue is empty, we only need to check whether both stacks are empty. The time complexity is 0(1)
 */
