class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while(true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      } else {
        console.log('Node exists')
        return undefined;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;

    let current = this.root;
    let found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return current;
  }

  contains(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  // BFS
  breadthFirstSearch() {
    let node = this.root;
    const data = [];
    const queue = [];

    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // DFS PreOrder
  depthFirstSearchPreOrder() {
    if (!this.root) return undefined;
    let current = this.root;
    const data = [];

    this.traversePreOrder(current, data);

    return data;
  }

  traversePreOrder(node, data) {
    data.push(node.value);
    if (node.left) this.traversePreOrder(node.left, data);
    if (node.right) this.traversePreOrder(node.right, data);
  }

  // DFS PostOrder
  depthFirstSearchPostOrder() {
    if (!this.root) return undefined;
    let current = this.root;
    const data = [];

    this.traversePostOrder(current, data);

    return data;
  }

  traversePostOrder(node, data) {
    if (node.left) this.traversePostOrder(node.left, data);
    if (node.right) this.traversePostOrder(node.right, data);
    data.push(node.value);
  }

  // DFS InOrder
  depthFirstSearchInOrder() {
    if (!this.root) return undefined;
    let current = this.root;
    const data = [];

    this.traverseInOrder(current, data);

    return data;
  }

  traverseInOrder(node, data) {
    if (node.left) this.traverseInOrder(node.left, data);
    data.push(node.value);
    if (node.right) this.traverseInOrder(node.right, data);
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
// tree.insert(7);
tree.insert(20);

console.log(tree.depthFirstSearchPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.depthFirstSearchPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.depthFirstSearchInOrder()); // [ 3, 6, 8, 10, 15, 20 ]
//          10
//      6        15
//   3     8         20
//      7
