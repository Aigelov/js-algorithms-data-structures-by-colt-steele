class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedListNew {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }


    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    const middle = Math.ceil(this.length / 2);
    let current;
    let counter;

    if (index <= middle) {
      // Iterate from start to middle
      current = this.head;
      counter = 0;
      while(index !== counter) {
        counter++;
        current = current.next;
      }
    } else {
      // Iterate from end to middle
      current = this.tail;
      counter = this.length - 1;
      while(current && counter > index) {
        counter--;
        current = current.prev;
      }
    }

    return current;
  }

  set(index, val) {
    const node = this.get(index);

    if (!node) return false;

    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const beforeNode = this.get(index - 1);
    const newNode = new Node(val);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const foundNode = this.get(index);
    const beforeNode = foundNode.prev;
    const afterNode = foundNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    foundNode.next = null;
    foundNode.prev = null;

    this.length--;
    return foundNode;
  }

  listToArray() {
    const listArr = [];
    let current = this.head;

    while(current) {
      listArr.push(current.val);
      current = current.next;
    }

    return listArr;
  }

  reverse() {
    if (!this.head) return null;
    if (this.length === 1) return this;

    let currentNode = this.head;
    this.tail = currentNode;

    while (currentNode !== null) {
      [currentNode.prev, currentNode.next] = [currentNode.next, currentNode.prev];

      if (currentNode.prev) {
        currentNode = currentNode.prev;
      } else {
        this.head = currentNode;
        break;
      }
    }

    return this;
  }
}

const list = new DoublyLinkedListNew();
list.push(1);
list.push(2);
list.push(3);
