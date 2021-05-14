//Undirected and Directed graph, Weighted graph, UnWeighted graph, Cyclic, Asyclic grpah 
//Edge List
var edgeList = [[0,2],[2,3],[2,1],[1,3]]

//Adjacent List
var edge = [[2],[2,3]] //index 0 connected to  and index 1 connected to 2 and 3

//Adjacent Matrix
const graph = {
    
}

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNode = Object.keys
        (this.adjacentList);
        for(let node of allNode) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for(vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node +"--->"+ connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdge(6,5);
myGraph.addEdge(6,4);
myGraph.showConnections();

