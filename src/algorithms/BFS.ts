import { Nodes, AdyacencyList, BFSExecutionResult } from "../models/interfaces"
import { Node } from "../classes/Node"
import { NodeState } from "../models/enums"
import { sleep } from "../utils/execution"


export const BFS = async (initialNodeId: string, nodesList: Nodes, adyacencyList: AdyacencyList): Promise<BFSExecutionResult> => {
    //We start the start node - Step 2 -
    nodesList[initialNodeId].state = NodeState.Visited
    nodesList[initialNodeId].distance = 0
    nodesList[initialNodeId].setStartNode()
    await sleep(200)

    let queue: Node[] = []

    //start node in the queue - Step 3 -
    queue.push(nodesList[initialNodeId])
    await sleep(200)

    while (queue.length > 0) {
        // extracting the node from the queue - Step 4 -
        let u_node: Node = queue.shift()!
        await sleep(200)

        // Traverse each node adjacent to node q_node
        for (let nodeId in adyacencyList[u_node.id]) {
            if (nodesList[nodeId].state == NodeState.Unvisited) {
                // - Step 5 -
                nodesList[nodeId].state = NodeState.Visited
                nodesList[nodeId].distance = u_node.distance + 1
                nodesList[nodeId].previous = u_node
                nodesList[nodeId].setVisited()
                adyacencyList[u_node.id][nodeId].setVisted()
                await sleep(200)

                // - Step 6 -
                queue.push(nodesList[nodeId])
                await sleep(200)
            }
        }

        // - Step 7 -
        u_node.state = NodeState.Finalized
        await sleep(200)
    }

    // Result
    let result: BFSExecutionResult = {
        Nodes: [],
        Distance: [],
        Previous: []
    }

    for (let nodeId in nodesList) {
        result.Nodes.push(nodesList[nodeId].id)
        result.Distance.push(nodesList[nodeId].distance.toString())
        result.Previous.push(nodesList[nodeId].previous?.id || 'null')
    }

    return result
}
