class Graph {

    constructor(vertices) {
        this.vertices = vertices;

        this.graph = Array.from(
            { length: vertices },
            () => []
        );
    }

    addEdge(u, v) {
        this.graph[u].push(v);
        this.graph[v].push(u);
    }

    shortestPath(source) {

        let queue = [];

        let distance =
            new Array(
                this.vertices
            ).fill(-1);

        distance[source] = 0;

        queue.push(source);

        while (queue.length) {

            let node =
                queue.shift();

            for (
                let neighbor of
                this.graph[node]
            ) {

                if (
                    distance[
                        neighbor
                    ] === -1
                ) {

                    distance[
                        neighbor
                    ] =
                        distance[
                            node
                        ] + 1;

                    queue.push(
                        neighbor
                    );
                }
            }
        }

        return distance;
    }
}


let g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);

console.log(
    g.shortestPath(0)
);