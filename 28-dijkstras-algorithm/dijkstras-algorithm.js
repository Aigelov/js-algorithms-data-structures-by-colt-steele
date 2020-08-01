const WeightedGraph = require('./weighted-graph');
const PriorityQueue = require('./priority-queue');
const PriorityQueueNaive = require('./priority-queue-naive');

class DijkstrasAlgorithm extends WeightedGraph {
  constructor() {
    super();
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    // Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    let path = []; // To return at end
    let smallest;

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === finish) {
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          if (!this.adjacencyList[smallest].hasOwnProperty(neighbor)) {
            continue;
          }
          // Find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];

          // Calculate new distances to neighboring nodes
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;

            // Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;

            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return {
      path: path.concat(smallest).reverse(),
      smallestDistance: distances[finish]
    };
  }
}
const graph = new DijkstrasAlgorithm();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

const path = graph.Dijkstra('A', 'E');
console.log(path);