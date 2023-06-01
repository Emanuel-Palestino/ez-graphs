import { Nodes, AdyacencyList } from "../models/interfaces"
import { Node } from '../classes/Node'
import { NodesStates } from '../models/enums'

let row_nodos:any[] = []
let row_distance:any[] = []
let row_finished:any[] = []
let row_previous:any[] = []


export async function DFS(node_init: string, nodes_list: Nodes, adyacency_list: AdyacencyList) {
    let time:number = 0
    
    await DFS_visited (nodes_list[node_init],time, adyacency_list, nodes_list)

    for(let key in nodes_list){
        if(nodes_list[key].state == NodesStates.Unvisited){
            console.log('**')
            await DFS_visited (nodes_list[key],time, adyacency_list, nodes_list)
        }
    }

    //Add information
    for(let key in nodes_list){
        row_nodos.push(nodes_list[key].id)
        row_distance.push(nodes_list[key].distance)
        row_finished.push(nodes_list[key].completed)
        row_previous.push(nodes_list[key].previous?.id)
    }

    
    //Print table    
    console.log('N: '+row_nodos)
    console.log('D: '+row_distance)
    console.log('F: '+row_finished)
    console.log('P: '+row_previous)
}

async function DFS_visited(node:Node, time:number, adyacency_list:AdyacencyList, nodes_list: Nodes){
    // - Step 3 -
    //console.log(time,node.id)
    node.state = NodesStates.Visited
    time++
    node.distance = time

    const edge_list = adyacency_list[node.id]
    for (let key in edge_list){
        //- Step 4 -
        if(nodes_list[key].state == NodesStates.Unvisited){
            nodes_list[key].previous = node
            await DFS_visited (nodes_list[key],time, adyacency_list, nodes_list)
        }
    }

    //- Step 5 -
    node.state = NodesStates.Finalized
    time++
    node.completed = time
}