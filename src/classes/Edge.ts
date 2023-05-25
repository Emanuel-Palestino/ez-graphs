import { Node } from './Node'

export class Edge {
	// SVG elements
	public edge: SVGGElement
	private line: SVGPathElement
	private weightText: SVGTextElement
	private weightTextPath: SVGTextPathElement

	// Public edge properties
	public from: Node
	public to: Node
	public id: string
	public weight: number

	private weighted: boolean = false
	private directed: boolean = false

	public static edgeCount: number = 0
	public static edgeDragged: Edge | null = null

	constructor(from: Node, directed: boolean = false) {
		Edge.edgeCount++
		this.id = `edge_${Edge.edgeCount}`
		this.directed = directed

		// Create edge container
		this.edge = document.createElementNS('http://www.w3.org/2000/svg', 'g')
		this.edge.setAttributeNS(null, 'class', 'full-edge')

		// Create edge line
		this.line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
		this.line.setAttributeNS(null, 'class', 'edge')
		this.line.setAttributeNS(null, 'id', this.id)
		this.line.setAttributeNS(null, 'from-node', from.id)
		// Add arrowhead to line if directed
		if (this.directed)
			this.line.setAttributeNS(null, 'marker-end', 'url(#arrowhead_temp)')

		// Create edge weight text
		this.weightText = document.createElementNS('http://www.w3.org/2000/svg', 'text')
		this.weightTextPath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath')
		this.weightText.appendChild(this.weightTextPath)

		// Append elements to edge container
		this.edge.appendChild(this.line)
		this.edge.appendChild(this.weightText)

		this.from = from
		this.to = new Node(0, 0, false)
		this.weight = 0
	}

	public moveFrom(x: number, y: number): void {
		if (this.from === this.to)
			this.line.setAttributeNS(null, 'd', `M ${this.from.x},${this.from.y} C ${(this.from.x - 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${(this.from.x + 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${this.from.x},${this.from.y} M ${this.from.x},${this.from.y}`)
		else {
			this.line.setAttributeNS(null, 'd', `M ${x},${y} L ${this.to.x},${this.to.y}`)

			// Update weight text orientation
			if (this.weighted) {
				this.weightTextPath.textContent = this.to.x < x ? this.weight.toString().split('').reverse().join('') : String(this.weight)
				this.weightText.setAttributeNS(null, 'rotate', `${this.to.x < x ? 180 : 0}`)
			}
		}
	}

	public moveTo(x: number, y: number): void {
		if (this.from === this.to)
			this.line.setAttributeNS(null, 'd', `M ${this.from.x},${this.from.y} C ${(this.from.x - 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${(this.from.x + 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${this.from.x},${this.from.y} M ${this.from.x},${this.from.y}`)
		else
			this.line.setAttributeNS(null, 'd', `M ${this.from.x},${this.from.y} L ${x},${y}`)

		// Update weight text orientation
		if (this.weighted) {
			this.weightTextPath.textContent = x < this.from.x ? this.weight.toString().split('').reverse().join('') : String(this.weight)
			this.weightText.setAttributeNS(null, 'rotate', `${x < this.from.x ? 180 : 0}`)
		}
	}

	public finishEdge(to: Node, weighted: boolean = false, weight: number = 0): void {
		// Finish edge creation
		this.weighted = weighted

		this.to = to
		Node.nodeCount--
		this.line.setAttributeNS(null, 'to-node', this.to.id)

		if (this.from === this.to) {
			this.line.setAttributeNS(null, 'd', `M ${this.from.x},${this.from.y} C ${(this.from.x - 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${(this.from.x + 70).toFixed(3)},${(this.from.y - 75).toFixed(3)} ${this.from.x},${this.from.y} M ${this.from.x},${this.from.y}`)

			if (this.directed)
				this.line.removeAttributeNS(null, 'marker-end')
		} else {
			this.line.setAttributeNS(null, 'd', `M ${this.from.x},${this.from.y} L ${to.x},${to.y}`)

			if (this.directed)
				this.line.setAttributeNS(null, 'marker-end', 'url(#arrowhead)')
		}

		if (this.weighted) {
			this.weight = weight
			this.weightTextPath.setAttributeNS(null, 'href', `#${this.id}`)
			this.weightTextPath.setAttributeNS(null, 'startOffset', '50%')
			this.weightTextPath.setAttributeNS(null, 'alignment-baseline', 'text-after-edge')
			this.weightTextPath.textContent = this.to.x < this.from.x ? this.weight.toString().split('').reverse().join('') : String(this.weight)

			this.weightText.setAttributeNS(null, 'rotate', `${this.to.x < this.from.x ? 180 : 0}`)
		}
	}

	public selecting(): void {
		this.line.classList.add('selecting')
	}

	public unselecting(): void {
		this.line.classList.remove('selecting')
	}

	public undraw(): void {
		this.edge.remove()
		Edge.edgeCount--
		Node.nodeCount--
	}
}