import { Edge } from './Edge'
import { Node } from './Node'
import { AdyacencyList, Edges, Nodes } from '../models/interfaces'
import { DrawingElement } from '../models/enums'


export class Editor {
	private canvas: SVGSVGElement
	private nodes: Nodes
	private edges: Edges
	private adyacencyList: AdyacencyList

	// Editor state
	public drawing: DrawingElement

	// Graph settings
	private directed: boolean
	private weighted: boolean
	private autoname: boolean

	constructor(canvas: SVGSVGElement) {
		this.canvas = canvas
		this.canvas.setAttribute('viewBox', `0 0 ${this.canvas.clientWidth} ${this.canvas.clientHeight}`)
		this.nodes = {}
		this.edges = {}
		this.adyacencyList = {}

		this.clickHandler = this.clickHandler.bind(this)
		this.mouseDownHandler = this.mouseDownHandler.bind(this)
		this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
		this.mouseUpHandler = this.mouseUpHandler.bind(this)

		this.drawing = DrawingElement.None
		this.directed = false
		this.weighted = false
		this.autoname = true
	}

	public init(): void {
		this.setupEventListener()
	}

	private setupEventListener(): void {
		this.canvas.addEventListener('click', this.clickHandler)
		this.canvas.addEventListener('mousedown', this.mouseDownHandler)
		this.canvas.addEventListener('mouseup', this.mouseUpHandler)
		this.canvas.addEventListener('mouseleave', this.mouseUpHandler)
	}

	private clickHandler(e: MouseEvent): void {
		const target = e.target as SVGElement

		// Create a new node
		if (target.id === 'canvas' && this.drawing === DrawingElement.Node) {
			const node = new Node(e.offsetX, e.offsetY)
			node.drawing()

			// Add the node to the canvas
			this.canvas.querySelector('#nodes')?.appendChild(node.node)

			// Add the node to the nodes object
			this.nodes[node.id] = node

			// Add the node to the adyacency list
			this.adyacencyList[node.id] = {}
		} else if (target.classList.contains('node') && this.drawing === DrawingElement.Delete) {
			const { id: nodeId } = target
			// Remove the edges connected to the node
			for (const edge of Object.values(this.adyacencyList[nodeId])) {
				edge.edge.remove()
				delete this.edges[edge.id]
			}

			// Remove the node from the adyacency list
			for (const connection in this.adyacencyList[nodeId])
				delete this.adyacencyList[connection][nodeId]
			delete this.adyacencyList[nodeId]

			// Remove the node
			this.nodes[nodeId].node.remove()
			delete this.nodes[nodeId]
		} else if (target.classList.contains('edge') && this.drawing === DrawingElement.Delete) {
			const { id: edgeId } = target
			const fromNode = this.edges[edgeId].from
			const toNode = this.edges[edgeId].to

			// Remove the edge from the adyacency list
			delete this.adyacencyList[fromNode.id][toNode.id]
			delete this.adyacencyList[toNode.id][fromNode.id]

			// Remove the edge
			this.edges[edgeId].edge.remove()
			delete this.edges[edgeId]
		}
	}

	private mouseDownHandler(e: MouseEvent): void {
		const target = e.target as SVGElement

		if (target.classList.contains('node')) {
			if (this.drawing === DrawingElement.Node) {
				// Set the node as the one being dragged
				Node.nodeDragged = this.nodes[target.id]
				Node.nodeDragged.startMove()
			} else if (this.drawing === DrawingElement.Edge) {
				// Create a new edge
				const edge = new Edge(this.nodes[target.id], this.directed)

				// Add the edge to the canvas
				this.canvas.querySelector('#edges')?.appendChild(edge.edge)

				// Set the edge as the one being dragged
				Edge.edgeDragged = edge

				this.canvas.classList.add('dragging-edge')
			}
		}

		this.canvas.addEventListener('mousemove', this.mouseMoveHandler)
	}

	private mouseMoveHandler(e: MouseEvent): void {
		if (this.drawing === DrawingElement.Node && Node.nodeDragged) {
			Node.nodeDragged.move(e.offsetX, e.offsetY)

			// Move the edges connected to/from the node
			for (const edge of Object.values(this.adyacencyList[Node.nodeDragged.id])) {
				if (edge.from === Node.nodeDragged)
					edge.moveFrom(e.offsetX, e.offsetY)
				else
					edge.moveTo(e.offsetX, e.offsetY)
			}

			// Move the edges connected to the node if the graph is directed
			if (this.directed) {
				this.canvas.querySelectorAll<SVGPathElement>(`.edge[to-node="${Node.nodeDragged.id}"]`).forEach(edge => {
					this.edges[edge.id].moveTo(e.offsetX, e.offsetY)
				})
			}
		} else if (this.drawing === DrawingElement.Edge && Edge.edgeDragged)
			Edge.edgeDragged.moveTo(e.offsetX, e.offsetY)
	}

	private mouseUpHandler(e: MouseEvent): void {
		if (this.drawing === DrawingElement.Node && Node.nodeDragged) {
			Node.nodeDragged.endMove()
			Node.nodeDragged = null
		} else if (this.drawing === DrawingElement.Edge && Edge.edgeDragged) {
			const target = e.target as SVGCircleElement

			if (!target.classList.contains('node') || this.adyacencyList[Edge.edgeDragged.from.id][target.id]) {
				// Remove the edge if it was not connected to a node
				// or if it was connected to a node with the same edge
				Edge.edgeDragged.edge.remove()
				Edge.edgeCount--
			} else {
				// Finish the edge drawing if it was connected to a node
				Edge.edgeDragged.finishEdge(this.nodes[target.id], true, 1000)
				this.edges[Edge.edgeDragged.id] = Edge.edgeDragged

				// Add the edge to the adyacency list
				this.adyacencyList[Edge.edgeDragged.from.id][Edge.edgeDragged.to.id] = Edge.edgeDragged
				if (!this.directed)
					this.adyacencyList[Edge.edgeDragged.to.id][Edge.edgeDragged.from.id] = Edge.edgeDragged
			}

			Edge.edgeDragged = null
			this.canvas.classList.remove('dragging-edge')
		}

		this.canvas.removeEventListener('mousemove', this.mouseMoveHandler)
	}

	public switchDrawingNode(): void {
		this.drawing = DrawingElement.Node
		for (const node of Object.values(this.nodes))
			node.drawing()

		for (const edge of Object.values(this.edges))
			edge.unselecting()
	}

	public switchDrawingEdge(): void {
		this.drawing = DrawingElement.Edge
		for (const node of Object.values(this.nodes))
			node.selecting()

		for (const edge of Object.values(this.edges))
			edge.unselecting()
	}

	public switchDeletingElement(): void {
		this.drawing = DrawingElement.Delete
		for (const node of Object.values(this.nodes))
			node.deleting()

		for (const edge of Object.values(this.edges))
			edge.selecting()
	}

	public createNewGraph(directed: boolean, weighted: boolean, autoname: boolean): void {
		this.directed = directed
		this.weighted = weighted
		this.autoname = autoname
	}
}