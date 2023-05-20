import { Node } from './Node'

export class Edge {
	public edge: SVGGElement
	private line: SVGPathElement
	private from: Node
	private to: Node | null


	public id: number
	public weight: number

	public static edgeCount: number = 0
	public static edgeDragged: Edge | null = null

	constructor(from: Node, directed: boolean = false, weighted: boolean = false, weight: number = 0) {
		Edge.edgeCount++

		this.edge = document.createElementNS('http://www.w3.org/2000/svg', 'g')
		this.edge.setAttribute('class', 'full-edge')

		this.line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
		this.line.setAttribute('class', 'edge')
		this.line.setAttribute('id', `edge_${'x'}`)
		this.line.setAttribute('from-node', from.id)

		if (directed) {
			this.line.setAttribute('marker-end', 'url(#arrowhead)')
		}

		if (weighted) {
		}

		this.edge.appendChild(this.line)

		this.from = from
		this.to = null

		this.id = Edge.edgeCount
		this.weight = weight
	}

	public move(x: number, y: number): void {
		this.line.setAttribute('d', `M ${this.from.x},${this.from.y} L ${x},${y}`)
	}

	public finishEdge(to: Node): void {
		this.to = to
		this.line.setAttribute('to-node', this.to.id)

		if (this.from === this.to) {
			this.line.setAttribute('d', `M ${this.from.x},${this.from.y} C ${(this.from.x - 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${(this.from.x + 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${this.from.x},${this.from.y} M ${this.from.x},${this.from.y}`)
		} else {
			this.line.setAttribute('d', `M ${this.from.x},${this.from.y} L ${to.x},${to.y}`)
		}
	}
}