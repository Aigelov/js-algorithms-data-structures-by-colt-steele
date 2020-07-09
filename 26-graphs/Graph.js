class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      let i = this.adjacencyList[vertex].length;
      while (i--) {
        const value = this.adjacencyList[vertex][i];
        if (value) this.removeEdge(vertex, value);
      }

      delete this.adjacencyList[vertex];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1);
  }

  // First solution
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      const index = this.adjacencyList[vertex1].indexOf(vertex2);
      if (index > -1) this.adjacencyList[vertex1].splice(index, 1);
    }

    if (this.adjacencyList[vertex1]) {
      const index = this.adjacencyList[vertex2].indexOf(vertex1);
      if (index > -1) this.adjacencyList[vertex2].splice(index, 1);
    }
  }

  // Second solution
  removeEdge2(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        value => value !== vertex2
      );
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        value => value !== vertex1
      );
    }
  }
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('San Francisco');
graph.addVertex('Seoul');
graph.addVertex('Hong Kong');
graph.addEdge('Tokyo', 'Seoul')
graph.addEdge('Tokyo', 'San Francisco')
graph.addEdge('Tokyo', 'Hong Kong')
graph.addEdge('Seoul', 'San Francisco')
graph.addEdge('Seoul', 'Hong Kong')
// graph.removeEdge('Tokyo', 'Seoul');
// graph.removeEdge2('San Francisco', 'Tokyo');
graph.removeVertex('Tokyo');

console.log(graph.adjacencyList);