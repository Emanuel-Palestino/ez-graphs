import { Edge } from './Edge'
import { Node } from './Node'
import { Nodes } from '../models/interfaces'


export class Editor {
	private canvas: SVGSVGElement
	private nodes: Nodes
	private edges: Edge[]

	constructor(canvas: SVGSVGElement) {
		this.canvas = canvas
		this.canvas.setAttribute('viewBox', `0 0 ${this.canvas.clientWidth} ${this.canvas.clientHeight}`)
		this.nodes = {}
		this.edges = []

		this.clickHandler = this.clickHandler.bind(this)
		this.mouseDownHandler = this.mouseDownHandler.bind(this)
		this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
		this.mouseUpHandler = this.mouseUpHandler.bind(this)

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
		let x: number = e.offsetX
		let y: number = e.offsetY
		let target = e.target as SVGSVGElement

		// Exit if the click was not on the canvas
		if (target.id !== 'canvas') return

		// Create a new node
		let node = new Node(x, y)
		this.canvas.appendChild(node.node)
		this.nodes[node.id] = node
	}

	private mouseDownHandler(e: MouseEvent): void {
		let target = e.target as SVGSVGElement

		if (target.classList.contains('node')) {
			// Set the node as the one being dragged
			let id = target.id
			Node.nodeDragged = this.nodes[id]
			Node.nodeDragged.startMove()
		}

		this.canvas.addEventListener('mousemove', this.mouseMoveHandler)
	}

	private mouseMoveHandler(e: MouseEvent): void {
		if (!Node.nodeDragged) return

		e.preventDefault()
		Node.nodeDragged.move(e.offsetX, e.offsetY)
	}

	private mouseUpHandler(e: MouseEvent): void {
		Node.nodeDragged?.endMove()
		Node.nodeDragged = null
		this.canvas.removeEventListener('mousemove', this.mouseMoveHandler)
	}

}