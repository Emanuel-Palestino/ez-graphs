import { Edge } from '../classes/Edge'
import { Node } from '../classes/Node'

export interface Nodes {
	[key: string]: Node
}

export interface Edges {
	[key: string]: Edge
}

export interface AdyacencyList {
	[key: string]: Edges
}