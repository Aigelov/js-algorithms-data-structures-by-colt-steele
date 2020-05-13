class MaxBinaryHeap {
  constructor() {
    this.values = [];
    // this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp();
  }

  bubbleUp() {
    const values = this.values;
    let currentIndex = values.length - 1;

    while(currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (values[currentIndex] <= values[parentIndex]) break;

      [values[currentIndex], values[parentIndex]] = [values[parentIndex], values[currentIndex]];
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length) {
      this.values[0] = end;

      // Bubble down
      this.sinkDown();
    }

    return max;
  }

  // Bubble down
  sinkDown() {
    let currentIndex = 0;
    const values = this.values;

    while(currentIndex < values.length) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let leftChild = 0;
      let rightChild = 0;

      if (leftChildIndex < values.length && values[leftChildIndex] > values[currentIndex]) {
        leftChild = values[leftChildIndex];
      }

      if (rightChildIndex < values.length && values[rightChildIndex] > values[currentIndex]) {
        rightChild = values[rightChildIndex];
      }

      const max = Math.max(leftChild, rightChild);

      if (values[currentIndex] >= max) break;

      const maxIndex = max === leftChild ? leftChildIndex : rightChildIndex;

      [values[maxIndex], values[currentIndex]] = [values[currentIndex], values[maxIndex]];
      currentIndex = maxIndex;
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(1);
heap.insert(5);
heap.insert(2);

console.log(heap.values);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
