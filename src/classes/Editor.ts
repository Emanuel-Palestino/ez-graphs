import { Edge } from './Edge'
import { Node } from './Node'
import { AdyacencyList, Edges, Nodes } from '../models/interfaces'
import { DrawingElement } from '../models/enums'
import { Modal } from './Modal'


export class Editor {
	private canvas: SVGSVGElement
	private nodes: Nodes
	private edges: Edges
	private adyacencyList: AdyacencyList

	// Editor state
	public drawing: DrawingElement
	private modalOpen: boolean

	// Graph settings
	private directed: boolean
	private weighted: boolean
	private autoname: boolean

	// Modals
	private nameNodeModal: Modal | null
	private edgeWeightModal: Modal | null

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
		this.modalOpen = false
		this.directed = false
		this.weighted = false
		this.autoname = true

		this.nameNodeModal = null
		this.edgeWeightModal = null
	}

	public init(): void {
		this.setupEventListener()
		this.nameNodeModal = new Modal('name_node_modal')
		this.edgeWeightModal = new Modal('edge_weight_modal')
	}

	private setupEventListener(): void {
		this.canvas.addEventListener('click', this.clickHandler)
		this.canvas.addEventListener('mousedown', this.mouseDownHandler)
		this.canvas.addEventListener('mouseup', this.mouseUpHandler)
		this.canvas.addEventListener('mouseleave', this.mouseUpHandler)
	}

	private async clickHandler(e: MouseEvent): Promise<void> {
		const target = e.target as SVGElement

		// Create a new node
		if (target.id === 'canvas' && this.drawing === DrawingElement.Node) {

			let nodeName = ''
			if (!this.autoname) {
				this.modalOpen = true
				const nameEvent = await this.nameNodeModal!.showAsync()
				this.modalOpen = false
				const nameInput = this.nameNodeModal?.dialog.querySelector<HTMLInputElement>('input') as HTMLInputElement

				if (nameEvent) {
					nameEvent.preventDefault()
					nodeName = nameInput.value
					nameInput.value = ''
				} else {
					nameInput.value = ''
					return
				}
			}

			const node = new Node(e.offsetX, e.offsetY, this.autoname, nodeName)
			node.drawing()

			// Add the node to the canvas
			this.canvas.querySelector('#nodes')?.appendChild(node.node)

			// Add the node to the nodes object
			this.nodes[node.id] = node

			// Add the node to the adyacency list
			this.adyacencyList[node.id] = {}
		} else if (target.classList.contains('node') && this.drawing === DrawingElement.Delete) {
			const { id: nodeId } = target
			// Remove the edges connected to/from the node
			this.canvas.querySelectorAll<SVGPathElement>(`.edge[from-node="${nodeId}"], .edge[to-node="${nodeId}"]`).forEach(edge => {
				// Remove the edge from the adyacency list
				delete this.adyacencyList[this.edges[edge.id].from.id][nodeId]
				delete this.adyacencyList[this.edges[edge.id].to.id][nodeId]

				// Remove the edge
				this.edges[edge.id].edge.remove()
				delete this.edges[edge.id]
			})

			// Remove the node from the adyacency list
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
			if (this.directed && this.adyacencyList[toNode.id][fromNode.id]) {
				this.adyacencyList[toNode.id][fromNode.id].updatePath(0, 0)
				this.adyacencyList[toNode.id][fromNode.id].moveUp()
			} else
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
			this.canvas.querySelectorAll<SVGPathElement>(`.edge[from-node="${Node.nodeDragged.id}"], .edge[to-node="${Node.nodeDragged.id}"]`).forEach(edge => {
				const currentEdge = this.edges[edge.id]
				if (currentEdge.from === Node.nodeDragged) {
					if (this.adyacencyList[currentEdge.to.id][currentEdge.from.id]) {
						const displacement = this.getDisplacement(currentEdge.from, currentEdge.to)
						currentEdge.moveFrom(e.offsetX, e.offsetY, displacement.dx, displacement.dy)
					} else
						currentEdge.moveFrom(e.offsetX, e.offsetY)
				} else {
					if (this.adyacencyList[currentEdge.to.id][currentEdge.from.id]) {
						const displacement = this.getDisplacement(currentEdge.from, currentEdge.to)
						currentEdge.moveTo(e.offsetX, e.offsetY, displacement.dx, displacement.dy)
					} else
						currentEdge.moveTo(e.offsetX, e.offsetY)
				}
			})
		} else if (this.drawing === DrawingElement.Edge && Edge.edgeDragged)
			Edge.edgeDragged.moveTo(e.offsetX, e.offsetY)
	}

	private async mouseUpHandler(e: MouseEvent): Promise<void> {
		if (this.drawing === DrawingElement.Node && Node.nodeDragged) {
			Node.nodeDragged.endMove()
			Node.nodeDragged = null
		} else if (this.drawing === DrawingElement.Edge && Edge.edgeDragged) {
			const target = e.target as SVGCircleElement

			if (!target.classList.contains('node') || this.adyacencyList[Edge.edgeDragged.from.id][target.id]) {
				// Do nothing if modal is open
				if (this.modalOpen) return

				// Remove the edge if it was not connected to a node
				// or if it was connected to a node with the same edge
				Edge.edgeDragged.undraw()
			} else {
				// Finish the edge drawing if it was connected to a node
				let weight = 0

				if (this.weighted) {
					this.modalOpen = true
					const weightEvent = await this.edgeWeightModal!.showAsync()
					this.modalOpen = false
					const weightInput = this.edgeWeightModal?.dialog.querySelector<HTMLInputElement>('input') as HTMLInputElement

					if (weightEvent) {
						weightEvent.preventDefault()
						weight = Number(weightInput.value)
						weightInput.value = ''
					} else {
						weightInput.value = ''
						Edge.edgeDragged.undraw()
						Edge.edgeDragged = null
						this.canvas.classList.remove('dragging-edge')
						return
					}
				}

				if (this.directed && this.adyacencyList[target.id][Edge.edgeDragged.from.id]) {
					const displacement = this.getDisplacement(Edge.edgeDragged.from, this.nodes[target.id])
					Edge.edgeDragged.finishEdge(this.nodes[target.id], this.weighted, weight, displacement.dx, displacement.dy)
					this.adyacencyList[target.id][Edge.edgeDragged.from.id].updatePath(-displacement.dx, -displacement.dy)
					this.adyacencyList[target.id][Edge.edgeDragged.from.id].moveDown()
				} else
					Edge.edgeDragged.finishEdge(this.nodes[target.id], this.weighted, weight)

				// Add the edge to the edges object
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

	private getDisplacement(from: Node, to: Node): { dx: number, dy: number } {
		if (from.x === to.x)
			return { dx: 5, dy: 0 }

		const slope = (to.y - from.y) / (to.x - from.x)
		const angle = Math.atan(slope)
		return {
			dx: 5 * Math.sin(angle),
			dy: 5 * Math.cos(angle)
		}
	}
}