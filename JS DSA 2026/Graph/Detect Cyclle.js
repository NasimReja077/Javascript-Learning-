// Given a directed graph, detect whether a cycle exists.
// Example:
// Cycle exists:
// 0 → 1 → 2
//     ↑   ↓
//     ←---
// Because:
// 1 → 2 → 1
// This creates a cycle.

class Graph {

    constructor(vertices) {
        this.vertices = vertices;
        this.graph = Array.from(
            { length: vertices },
            () => []
        );
    }

    addEdge(source, destination) {
        this.graph[source].push(
            destination
        );
    }

    dfs(node, visited, pathVisited) {

        visited[node] = true;

        pathVisited[node] = true;

        for (
            let neighbor of
            this.graph[node]
        ) {

            // Not visited
            if (!visited[neighbor]) {

                if (
                    this.dfs(
                        neighbor,
                        visited,
                        pathVisited
                    )
                ) {
                    return true;
                }
            }

            // Found in current path
            else if (
                pathVisited[neighbor]
            ) {
                return true;
            }
        }

        // Remove from current path
        pathVisited[node] = false;

        return false;
    }

    hasCycle() {

        let visited =
            new Array(
                this.vertices
            ).fill(false);

        let pathVisited =
            new Array(
                this.vertices
            ).fill(false);

        for (
            let i = 0;
            i < this.vertices;
            i++
        ) {

            if (!visited[i]) {

                if (
                    this.dfs(
                        i,
                        visited,
                        pathVisited
                    )
                ) {
                    return true;
                }
            }
        }

        return false;
    }
}


let g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 3);
g.addEdge(3, 1); // cycle

console.log(
    g.hasCycle()
);