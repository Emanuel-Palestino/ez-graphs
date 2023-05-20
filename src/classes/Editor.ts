import { Edge } from './Edge'
import { Node } from './Node'
import { Nodes } from '../models/interfaces'
import { DrawingElement } from '../models/enums'


export class Editor {
	private canvas: SVGSVGElement
	private nodes: Nodes

	// Editor state
	public drawing: DrawingElement

	constructor(canvas: SVGSVGElement) {
		this.canvas = canvas
		this.canvas.setAttribute('viewBox', `0 0 ${this.canvas.clientWidth} ${this.canvas.clientHeight}`)
		this.nodes = {}

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
			}
		}

		this.canvas.addEventListener('mousemove', this.mouseMoveHandler)
	}

	private mouseMoveHandler(e: MouseEvent): void {
		e.preventDefault()

		if (this.drawing === DrawingElement.Node && Node.nodeDragged) {
			Node.nodeDragged.move(e.offsetX, e.offsetY)
		} else if (this.drawing === DrawingElement.Edge && Edge.edgeDragged) {
			Edge.edgeDragged.move(e.offsetX, e.offsetY)
		}
	}

	private mouseUpHandler(e: MouseEvent): void {
		if (this.drawing === DrawingElement.Node && Node.nodeDragged) {
			Node.nodeDragged.endMove()
			Node.nodeDragged = null
		} else if (this.drawing === DrawingElement.Edge && Edge.edgeDragged) {
			const target = e.target as SVGCircleElement

			if (!target.classList.contains('node')) {
				// Remove the edge if it was not connected to a node
				Edge.edgeDragged.edge.remove()
			} else {
				// Finish the edge drawing if it was connected to a node
				Edge.edgeDragged.finishEdge(this.nodes[target.id])
			}

			Edge.edgeDragged = null
		}

		this.canvas.removeEventListener('mousemove', this.mouseMoveHandler)
	}

}