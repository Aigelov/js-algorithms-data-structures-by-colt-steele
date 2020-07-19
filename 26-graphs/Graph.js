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

  // Depth First Search Recursive
  DFS_Recursive(start) {
    const list = [];
    const visited = {};
    const graph = this.adjacencyList;

    const DFS = (vertex) => {
      if (!vertex) return null;
      if (!graph[vertex]) return list;

      list.push(vertex);
      visited[vertex] = true;

      graph[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return DFS(neighbor);
        }
      });
    }

    DFS(start);

    return list;
  }

  // Depth First Search Iterative
  DFS_Iterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    const graph = this.adjacencyList;

    visited[start] = true;

    while(stack.length) {
      const vertex = stack.pop();
      result.push(vertex);

      graph[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      });
    }

    return result;
  }

  // Breadth First Search
  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    const graph = this.adjacencyList;

    visited[start] = true;

    while(queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      graph[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }

    return result;
  }
}

const graph = new Graph();
// graph.addVertex('Tokyo');
// graph.addVertex('San Francisco');
// graph.addVertex('Seoul');
// graph.addVertex('Hong Kong');
// graph.addEdge('Tokyo', 'Seoul')
// graph.addEdge('Tokyo', 'San Francisco')
// graph.addEdge('Tokyo', 'Hong Kong')
// graph.addEdge('Seoul', 'San Francisco')
// graph.addEdge('Seoul', 'Hong Kong')
// graph.removeEdge('Tokyo', 'Seoul');
// graph.removeEdge2('San Francisco', 'Tokyo');
// graph.removeVertex('Tokyo');

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(graph.adjacencyList);
// console.log(graph.DFS_Recursive('A'));
// console.log(graph.DFS_Iterative('A'));
console.log(graph.BFS('A'));