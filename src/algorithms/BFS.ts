import { Nodes, AdyacencyList } from "../models/interfaces";
import { Node } from "../classes/Node";
import { statesNodes } from '../models/enums'


let queue_nodes: Node[] = []
const pseudocodigoBFS: string = `
    <p>BFS(grafo G, nodo_fuente s) {</p>
    <div class="bloque">
        <p>for u ∈ V[G] do {</p>
        <div class="bloque">
            <div paso="1">
                <p>estado[u] = NO_VISITADO;</p>
                <p>distancia[u] = INFINITO;</p>
                <p>padre[u] = NULL;</p>
            </div>
        </div>
        <p>}</p>
        
        <div paso="2">
            <p>estado[s] = VISITADO;</p>
            <p>distancia[s] = 0;</p>
            <p>padre[s] = NULL;</p>
        </div>
        <p>CrearCola(Q);</p>
        <p paso="3">Encolar(Q, s);</p>
        <p>while !vacía(Q) do {</p>
        <div class="bloque">
            <p paso="4">u = extraer(Q);</p>
            
            <p>for v ∈ adyacencia[u] do {</p>
            <div class="bloque">
                <p>if estado[v] == NO_VISITADO then {</p>
                <div class="bloque">
                    <div paso="5">
                        <p>estado[v] = VISITADO;</p>
                        <p>distancia[v] = distancia[u] + 1;</p>
                        <p>padre[v] = u;</p>
                    </div>
                    
                    <p paso="6">Encolar(Q, v);</p>
                </div>
                <p>}</p>
            </div>
            <p>}</p>
            
            <p paso="7">estado[u] = FINALIZADO;</p>
        </div>
        <p>}</p>
    </div>
    <p>}</p>`;

export function BFS(node_init: string, nodes_list: Nodes, adyacency_list: AdyacencyList) {
    //We start the start node
    nodes_list[node_init].state = statesNodes.Visited
    nodes_list[node_init].distance = 0

    //start node in the queue, - here will be a await -
    queue_nodes.push(nodes_list[node_init])

    while (queue_nodes.length > 0) {
        // extracting the node from the queue
        let q_node: Node = queue_nodes.shift() as Node

        for (let idNode in adyacency_list[q_node.id]) {
            let index = nodes_list
        }
    }
}

//constructor (nodo inicial, lista de adyacencias, lista de nodos)
