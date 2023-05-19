export class Node {
	public node: SVGGElement
	private circle: SVGCircleElement
	private name: SVGTextElement

	public x: number
	public y: number
	public id: string

	private state: string
	private distance: number
	private finished: boolean
	private previous: Node | null
	private edges: any[]

	public static nodeCount: number = 0

	constructor(name: string, x: number, y: number) {
		Node.nodeCount++

		this.x = x
		this.y = y

		this.node = document.createElementNS('http://www.w3.org/2000/svg', 'g')
		this.node.setAttribute('class', 'full-node')

		this.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
		this.circle.setAttribute('class', 'node')
		this.circle.setAttribute('id', `node_${name}`)
		this.circle.setAttribute('cx', String(this.x))
		this.circle.setAttribute('cy', String(this.y))

		this.name = document.createElementNS('http://www.w3.org/2000/svg', 'text')
		this.name.setAttribute('x', String(this.x))
		this.name.setAttribute('y', String(this.y - 22))
		this.name.setAttribute('for-node', name)
		this.name.textContent = name

		this.node.appendChild(this.circle)
		this.node.appendChild(this.name)

		this.id = `node_${name}`
		this.state = 'unvisited'
		this.distance = Infinity
		this.finished = false
		this.previous = null
		this.edges = []
	}
}