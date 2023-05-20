import { Edge } from '../classes/Edge'
import { Node } from '../classes/Node'

export interface Nodes {
	[key: string]: Node
}

export interface AdyacencyList {
	[key: string]: {
		[key: string]: Edge
	}
}