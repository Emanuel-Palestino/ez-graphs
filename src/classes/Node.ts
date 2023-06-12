import { NodeState } from '../models/enums'

export class Node {
	// SVG elements
	public node: SVGGElement
	private circle: SVGCircleElement
	private name: SVGTextElement

	// Public node properties
	public x: number
	public y: number
	public id: string

	// Private node properties
	public state: NodeState
	public distance: number
	public completed: number
	public previous: Node | null

	public static nodeCount: number = 0
	public static nodeDragged: Node | null = null

	constructor(x: number, y: number, autoname: boolean, name: string = '') {
		Node.nodeCount++

		this.x = x
		this.y = y

		// Create node container
		this.node = document.createElementNS('http://www.w3.org/2000/svg', 'g')
		this.node.setAttributeNS(null, 'class', 'full-node')

		// Create node circle
		this.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
		this.circle.setAttributeNS(null, 'class', 'node')
		this.circle.setAttributeNS(null, 'id', `node_${autoname ? Node.nodeCount : name}`)
		this.circle.setAttributeNS(null, 'cx', String(this.x))
		this.circle.setAttributeNS(null, 'cy', String(this.y))
		this.circle.setAttributeNS(null, 'r', '20')

		// Create node name
		this.name = document.createElementNS('http://www.w3.org/2000/svg', 'text')
		this.name.setAttributeNS(null, 'x', String(this.x))
		this.name.setAttributeNS(null, 'y', String(this.y - 22))
		this.name.setAttributeNS(null, 'alignment-baseline', 'after-edge')
		this.name.setAttributeNS(null, 'for-node', autoname ? String(Node.nodeCount) : name)
		this.name.textContent = autoname ? String(Node.nodeCount) : name

		// Append elements to node container
		this.node.appendChild(this.circle)
		this.node.appendChild(this.name)

		// Set node properties
		this.id = `node_${autoname ? Node.nodeCount : name}`
		this.state = this.state = NodeState.Unvisited
		this.distance = Infinity
		this.previous = null
		this.completed = Infinity
	}

	public startMove(): void {
		this.circle.classList.add('grabbing')
	}

	public move(x: number, y: number): void {
		this.x = x
		this.y = y

		this.circle.setAttributeNS(null, 'cx', String(this.x))
		this.circle.setAttributeNS(null, 'cy', String(this.y))

		this.name.setAttributeNS(null, 'x', String(this.x))
		this.name.setAttributeNS(null, 'y', String(this.y - 22))
	}

	public endMove(): void {
		this.circle.classList.remove('grabbing')
	}

	public drawing(): void {
		this.circle.classList.remove('selecting')
		this.circle.classList.remove('deleting')

		this.circle.classList.add('drawing')
	}

	public selecting(): void {
		this.circle.classList.remove('drawing')
		this.circle.classList.remove('deleting')

		this.circle.classList.add('selecting')
	}

	public deleting(): void {
		this.circle.classList.remove('drawing')
		this.circle.classList.remove('selecting')

		this.circle.classList.add('deleting')
	}

	public unselectable(): void {
		this.circle.classList.remove('drawing')
		this.circle.classList.remove('selecting')
		this.circle.classList.remove('deleting')
	}

	public setStartNode(): void {
		this.circle.classList.add('start-node')
	}

	public setVisited(): void {
		this.circle.classList.add('visited')
	}

	public resetNode(): void {
		this.circle.classList.remove('visited')
		this.circle.classList.remove('start-node')
		this.state = NodeState.Unvisited
		this.distance = Infinity
		this.previous = null
		this.completed = Infinity
	}
}
