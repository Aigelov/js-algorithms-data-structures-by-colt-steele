class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  // Add to beginning of the list (In fact it is unshift)
  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const first = this.first;
      this.first = newNode;
      this.first.next = first;
    }

    this.size++;
    return this.size;
  }

  // Remove from beginning of the list (In fact it is shift)
  pop() {
    if (!this.first) return null;

    const removedNode = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;

    this.size--;
    return removedNode.value;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);