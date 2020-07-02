class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    const values = this.values;
    let currentIndex = values.length - 1;
    let current = values[currentIndex];

    while(currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const parent = values[parentIndex];

      if (current.priority >= parent.priority) break;

      [values[currentIndex], values[parentIndex]] = [values[parentIndex], values[currentIndex]];
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length) {
      this.values[0] = end;
      // Bubble down
      this.sinkDown();
    }

    return min;
  }

  // Bubble down
  sinkDown() {
    let currentIndex = 0;
    const values = this.values;
    const current = values[0];

    while(true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIndex < values.length) {
        leftChild = values[leftChildIndex];

        if (leftChild.priority < current.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < values.length) {
        rightChild = values[rightChildIndex];

        if (
          (swap === null && rightChild.priority < current.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      [values[swap], values[currentIndex]] = [values[currentIndex], values[swap]];
      currentIndex = swap;
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('Common cold', 5);
priorityQueue.enqueue('Gunshot wound', 1);
priorityQueue.enqueue('High fever', 4);
priorityQueue.enqueue('Broken arm', 2);
priorityQueue.enqueue('Glass in foot', 3);

priorityQueue.values.forEach(item => {
  console.log(item.priority);
});

console.log('---------------');
console.log(priorityQueue.dequeue().priority);
console.log(priorityQueue.dequeue().priority);
console.log(priorityQueue.dequeue().priority);
console.log(priorityQueue.dequeue().priority);
console.log(priorityQueue.dequeue().priority);
