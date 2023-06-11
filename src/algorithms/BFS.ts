import { Nodes, AdyacencyList, BFSExecutionResults } from "../models/interfaces"
import { Node } from "../classes/Node"
import { NodeState } from "../models/enums"

export const BFS = async (initialNodeId: string, nodesList: Nodes, adyacencyList: AdyacencyList) => {
    let executionResults: BFSExecutionResults = {
        Nodes: [],
        Distance: [],
        Previous: []
    }

    //We start the start node - Step 2 -
    nodesList[initialNodeId].state = NodeState.Visited
    nodesList[initialNodeId].distance = 0

    let queue: Node[] = []

    //start node in the queue - Step 3 -
    queue.push(nodesList[initialNodeId])

    while (queue.length > 0) {
        // extracting the node from the queue - Step 4 -
        let u_node: Node = queue.shift()!

        // Traverse each node adjacent to node q_node
        for (let nodeId in adyacencyList[u_node.id]) {
            if (nodesList[nodeId].state == NodeState.Unvisited) {
                // - Step 5 -
                nodesList[nodeId].state = NodeState.Visited
                nodesList[nodeId].distance = u_node.distance + 1
                nodesList[nodeId].previous = u_node

                // - Step 6 -
                queue.push(nodesList[nodeId])
            }
        }

        // - Step 7 -
        u_node.state = NodeState.Finalized
    }

    for (let nodeId in nodesList) {
        executionResults.Nodes.push(nodesList[nodeId].id)
        executionResults.Distance.push(nodesList[nodeId].distance.toString())
        executionResults.Previous.push(nodesList[nodeId].previous?.id || 'null')
    }

    return executionResults
}
