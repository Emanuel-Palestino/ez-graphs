import { Node } from './Node'

export class Edge {
	// SVG elements
	public edge: SVGGElement
	private line: SVGPathElement

	// Public edge properties
	public from: Node
	public to: Node | null
	public id: number
	public weight: number

	public static edgeCount: number = 0
	public static edgeDragged: Edge | null = null

	constructor(from: Node, directed: boolean = false) {
		Edge.edgeCount++

		// Create edge container
		this.edge = document.createElementNS('http://www.w3.org/2000/svg', 'g')
		this.edge.setAttribute('class', 'full-edge')

		// Create edge line
		this.line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
		this.line.setAttribute('class', 'edge')
		this.line.setAttribute('id', `edge_${'x'}`)
		this.line.setAttribute('from-node', from.id)
		// Add arrowhead to line if directed
		if (directed) {
			this.line.setAttribute('marker-end', 'url(#arrowhead)')
		}

		// Append elements to edge container
		this.edge.appendChild(this.line)

		this.from = from
		this.to = null
		this.id = Edge.edgeCount
		this.weight = 0
	}

	public moveFrom(x: number, y: number): void {
		if (!this.to) return

		this.line.setAttribute('d', `M ${x},${y} L ${this.to.x},${this.to.y}`)
	}

	public moveTo(x: number, y: number): void {
		this.line.setAttribute('d', `M ${this.from.x},${this.from.y} L ${x},${y}`)
	}

	public finishEdge(to: Node, weighted: boolean = false, weight: number = 0): void {
		// Finish edge creation

		this.to = to
		this.line.setAttribute('to-node', this.to.id)

		if (this.from === this.to) {
			this.line.setAttribute('d', `M ${this.from.x},${this.from.y} C ${(this.from.x - 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${(this.from.x + 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${this.from.x},${this.from.y} M ${this.from.x},${this.from.y}`)
		} else {
			this.line.setAttribute('d', `M ${this.from.x},${this.from.y} L ${to.x},${to.y}`)
		}

		if (weighted) {
			this.weight = weight
		}
	}
}