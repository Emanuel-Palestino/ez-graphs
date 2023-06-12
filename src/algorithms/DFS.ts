import { Nodes, AdyacencyList, DFSExecutionResult } from '../models/interfaces'
import { Node } from '../classes/Node'
import { NodeState } from '../models/enums'
import { sleep } from '../utils/execution'

export async function DFS(initialNodeId: string, nodesList: Nodes, adyacencyList: AdyacencyList): Promise<DFSExecutionResult> {
    let time: number = 0
    nodesList[initialNodeId].setStartNode()

    for (const u of [nodesList[initialNodeId], ...Object.values(nodesList)]) {
        if (u.state === NodeState.Unvisited) {
            // - Step 2 -
            await sleep(200)
            time = await DFS_visited(u, time, adyacencyList, nodesList)
        }
    }

    // Result
    let result: DFSExecutionResult = { Nodes: [], Distance: [], Finished: [], Previous: [] }
    for (let key in nodesList) {
        result.Nodes.push(nodesList[key].id)
        result.Distance.push(nodesList[key].distance.toString())
        result.Finished.push(nodesList[key].completed.toString())
        result.Previous.push(nodesList[key].previous?.id || 'null')
    }

    return result
}

async function DFS_visited(node: Node, time: number, adyacencyList: AdyacencyList, nodeList: Nodes): Promise<number> {
    // - Step 3 -
    await sleep(200)
    node.state = NodeState.Visited
    time++
    node.distance = time

    for (const adyacentNodeId in adyacencyList[node.id]) {
        if (nodeList[adyacentNodeId].state == NodeState.Unvisited) {
            //- Step 4 -
            await sleep(200)
            nodeList[adyacentNodeId].previous = node
            nodeList[adyacentNodeId].setVisited()
            adyacencyList[node.id][adyacentNodeId].setVisted()

            time = await DFS_visited(nodeList[adyacentNodeId], time, adyacencyList, nodeList)
        }
    }

    // - Step 5 -
    await sleep(200)
    node.state = NodeState.Finalized
    time++
    node.completed = time

    return time
}