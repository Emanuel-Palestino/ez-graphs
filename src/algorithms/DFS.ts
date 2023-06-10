import { Nodes, AdyacencyList, DFSExecutionResults } from "../models/interfaces"
import { Node } from '../classes/Node'
import { NodesStates } from '../models/enums'

export async function DFS(nodeInit: string, nodeList: Nodes, adyacencyList: AdyacencyList):Promise<DFSExecutionResults> {
    let executionResults: DFSExecutionResults = { Nodes: [], Distance: [], Finished: [], Previous: [] }
    let time: number = 0

    await DFS_visited(nodeList[nodeInit], time, adyacencyList, nodeList)

    //Add information
    for (let key in nodeList) {
        executionResults.Nodes.push(nodeList[key].id)
        executionResults.Distance.push(nodeList[key].distance.toString())
        executionResults.Finished.push(nodeList[key].completed.toString())
        executionResults.Previous.push(nodeList[key].previous?.id as string)
    }

    return executionResults
}

async function DFS_visited(node: Node, time: number, adyacencyList: AdyacencyList, nodeList: Nodes) {
    // - Step 3 -
    //console.log(time,node.id)
    node.state = NodesStates.Visited
    time++
    node.distance = time

    const edge_list = adyacencyList[node.id]
    for (let key in edge_list) {
        //- Step 4 -
        if (nodeList[key].state == NodesStates.Unvisited) {
            nodeList[key].previous = node
            time = await DFS_visited(nodeList[key], time, adyacencyList, nodeList)
        }
    }

    //- Step 5 -
    node.state = NodesStates.Finalized
    time++
    node.completed = time

    return time
}