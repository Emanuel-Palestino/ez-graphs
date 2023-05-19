import { Node } from "./Node"

export class Edge {
	private edge: SVGGElement
	private line: SVGPathElement
	public id: number
	public weight: number

	public static edgeCount: number = 0

	constructor(from: Node, to: Node, directed: boolean = false, weighted: boolean = false, weight: number = 0) {
		Edge.edgeCount++

		this.edge = document.createElementNS('http://www.w3.org/2000/svg', 'g')
		this.edge.setAttribute('class', 'full-edge')

		this.line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
		this.line.setAttribute('class', 'edge')
		this.line.setAttribute('id', `edge_${'x'}`)
		this.line.setAttribute('from-node', from.id)
		this.line.setAttribute('to-node', to.id)

		if (from === to) {
			this.line.setAttribute('d', `M ${from.x},${from.y} C ${(from.x - 70).toFixed(3)},${(from.y - 75).toFixed(3)} ${(from.x + 70).toFixed(3)},${(from.y - 75).toFixed(3)} ${from.x},${from.y} M ${from.x},${from.y}`)
		} else {
			this.line.setAttribute('d', `M ${from.x},${from.y} L ${to.x},${to.y}`)
			if (directed) {
				this.line.setAttribute('marker-end', 'url(#arrowhead)')
			}
		}

		if (weighted) {
		}

		this.edge.appendChild(this.line)

		this.id = Edge.edgeCount
		this.weight = weight
	}
}