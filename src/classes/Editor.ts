import { Edge } from './Edge'
import { Node } from './Node'
import { AdyacencyList, Nodes } from '../models/interfaces'
import { DrawingElement } from '../models/enums'


export class Editor {
	private canvas: SVGSVGElement
	private nodes: Nodes
	private adyacencyList: AdyacencyList

	// Editor state
	public drawing: DrawingElement

	constructor(canvas: SVGSVGElement) {
		this.canvas = canvas
		this.canvas.setAttribute('viewBox', `0 0 ${this.canvas.clientWidth} ${this.canvas.clientHeight}`)
		this.nodes = {}
		this.adyacencyList = {}

		this.clickHandler = this.clickHandler.bind(this)
		this.mouseDownHandler = this.mouseDownHandler.bind(this)
		this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
		this.mouseUpHandler = this.mouseUpHandler.bind(this)

		this.drawing = DrawingElement.None
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

		// Exit if the click was not on the canvas
		if (target.id !== 'canvas') return

		// Create a new node
		if (this.drawing === DrawingElement.Node) {
			const node = new Node(e.offsetX, e.offsetY)

			// Add the node to the canvas
			this.canvas.querySelector('#nodes')?.appendChild(node.node)

			// Add the node to the nodes object
			this.nodes[node.id] = node

			// Add the node to the adyacency list
			this.adyacencyList[node.id] = {}
		}
	}

	private mouseDownHandler(e: MouseEvent): void {
		const target = e.target as SVGElement

		if (this.drawing === DrawingElement.Node) {
			if (target.classList.contains('node')) {
				// Set the node as the one being dragged
				Node.nodeDragged = this.nodes[target.id]
				Node.nodeDragged.startMove()
			}
		} else if (this.drawing === DrawingElement.Edge) {
			if (target.classList.contains('node')) {
				// Create a new edge
				const edge = new Edge(this.nodes[target.id])

				// Add the edge to the canvas
				this.canvas.querySelector('#edges')?.appendChild(edge.edge)

				// Set the edge as the one being dragged
				Edge.edgeDragged = edge

				this.canvas.classList.add('grabbing')
			}
		}

		this.canvas.addEventListener('mousemove', this.mouseMoveHandler)
	}

	private mouseMoveHandler(e: MouseEvent): void {
		if (this.drawing === DrawingElement.Node && Node.nodeDragged) {
			Node.nodeDragged.move(e.offsetX, e.offsetY)

			// Move the edges connected to the node
			const edges = Object.values(this.adyacencyList[Node.nodeDragged.id])
			for (const edge of edges) {
				if (edge.from === Node.nodeDragged)
					edge.moveFrom(e.offsetX, e.offsetY)
				else
					edge.moveTo(e.offsetX, e.offsetY)
			}

		} else if (this.drawing === DrawingElement.Edge && Edge.edgeDragged) {
			Edge.edgeDragged.moveTo(e.offsetX, e.offsetY)
		}
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
			} else {
				// Finish the edge drawing if it was connected to a node
				Edge.edgeDragged.finishEdge(this.nodes[target.id], true, 1000)

				// Add the edge to the adyacency list
				if (!this.adyacencyList[Edge.edgeDragged.from.id][Edge.edgeDragged.to!.id]) {
					this.adyacencyList[Edge.edgeDragged.from.id][Edge.edgeDragged.to!.id] = Edge.edgeDragged
					this.adyacencyList[Edge.edgeDragged.to!.id][Edge.edgeDragged.from.id] = Edge.edgeDragged
				}
			}

			Edge.edgeDragged = null
			this.canvas.classList.remove('grabbing')
		}

		this.canvas.removeEventListener('mousemove', this.mouseMoveHandler)
	}

}