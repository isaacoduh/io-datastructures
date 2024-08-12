class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      this.length++;
      return true;
    }
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  top() {
    if (this.length === 0) {
      return undefined;
    }
    return this.first;
  }
}

let stack = new Stack(0);
stack.push(1);
stack.push(2);
stack.pop();

console.log(stack);
