class Graph {

    constructor(vertices) {
        this.vertices = vertices;

        this.graph = Array.from(
            { length: vertices },
            () => []
        );
    }

    addEdge(u, v, weight) {

        this.graph[u].push({
            node: v,
            weight: weight
        });

        this.graph[v].push({
            node: u,
            weight: weight
        });
    }

    dijkstra(source) {

        let dist =
            new Array(
                this.vertices
            ).fill(Infinity);

        let visited =
            new Array(
                this.vertices
            ).fill(false);

        dist[source] = 0;

        for (
            let i = 0;
            i < this.vertices;
            i++
        ) {

            let minNode = -1;

            // Find minimum distance node
            for (
                let j = 0;
                j < this.vertices;
                j++
            ) {

                if (
                    !visited[j] &&
                    (
                        minNode === -1 ||
                        dist[j] <
                        dist[minNode]
                    )
                ) {
                    minNode = j;
                }
            }

            visited[minNode] = true;

            // Relax edges
            for (
                let neighbor of
                this.graph[minNode]
            ) {

                let nextNode =
                    neighbor.node;

                let weight =
                    neighbor.weight;

                if (
                    dist[minNode] +
                    weight <
                    dist[nextNode]
                ) {

                    dist[nextNode] =
                        dist[minNode] +
                        weight;
                }
            }
        }

        return dist;
    }
}


let g = new Graph(4);

g.addEdge(0, 1, 4);
g.addEdge(0, 2, 2);
g.addEdge(1, 3, 1);
g.addEdge(2, 3, 3);

console.log(
    g.dijkstra(0)
);