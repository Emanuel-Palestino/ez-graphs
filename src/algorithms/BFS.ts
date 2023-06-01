import { Nodes, AdyacencyList, BFSExecutionResults } from "../models/interfaces";
import { Node } from "../classes/Node";
import { NodesStates } from "../models/enums";

export function BFS(NodeInt: string,NodeList: Nodes,AdyacencyList: AdyacencyList) {
    let queue_nodes: Node[] = [];

    //We start the start node - Step 2 -
    NodeList[NodeInt].state = NodesStates.Visited;
    NodeList[NodeInt].distance = 0;

    //start node in the queue - Step 3 -
    queue_nodes.push(NodeList[NodeInt]);

    while (queue_nodes.length > 0) {
        // extracting the node from the queue - Step 4 -
        let q_node: Node = queue_nodes.shift() as Node;

        if (q_node != undefined) {
            const edge_list = AdyacencyList[q_node.id];

            //// Traverse each node adjacent to node q_node
            for (let key in edge_list) {
                // - Step 5 -
                if (NodeList[key].state == NodesStates.Unvisited) {
                    NodeList[key].state = NodesStates.Visited;
                    NodeList[key].distance = q_node.distance + 1;
                    NodeList[key].previous = q_node;

                    queue_nodes.push(NodeList[key]);
                }
            }

            // - Step 6 -
            q_node.state = NodesStates.Finalized;
        }
    }

    let resultsExecution: BFSExecutionResults = {
        Nodes: [],
        Distance: [],
        Previous: [],
    };

    for (let key in NodeList) {
        resultsExecution.Nodes.push(NodeList[key].id);
        resultsExecution.Distance.push(NodeList[key].distance.toString());
        resultsExecution.Previous.push(NodeList[key].previous?.id as string);
    }

    return resultsExecution;
}

//constructor (nodo inicial, lista de adyacencias, lista de nodos)
