import { Edge } from "./classes/Edge"
import { Node } from "./classes/Node"

let SVGCanvas: SVGSVGElement = document.querySelector<SVGSVGElement>('#canvas') || document.createElementNS('http://www.w3.org/2000/svg', 'svg')
let nodes: Node[] = []
let edges: Edge[] = []

SVGCanvas.setAttribute('viewBox', `0 0 ${SVGCanvas.clientWidth} ${SVGCanvas.clientHeight}`)

SVGCanvas.addEventListener('click', (e: MouseEvent) => {
	let x: number = e.offsetX
	let y: number = e.offsetY
	let target = e.target as SVGSVGElement

	// Exit if the click was not on the canvas
	if (target.id !== 'canvas') return

	// Create a new node
	let node = new Node(x, y)
	SVGCanvas.appendChild(node.node)
	nodes.push(node)
})


SVGCanvas.addEventListener('mousedown', (e: MouseEvent) => {
	let target = e.target as SVGSVGElement

	if (target.classList.contains('node')) {
		// Set the node as the one being dragged
		let id = target.id
		Node.nodeDragged = nodes.find(node => node.id === id) || null
		Node.nodeDragged?.startMove()
	}

	SVGCanvas.addEventListener('mousemove', mouseMoveHandler)
})

const mouseMoveHandler = (e: MouseEvent) => {
	if (Node.nodeDragged) {
		let x: number = e.offsetX
		let y: number = e.offsetY

		Node.nodeDragged.move(x, y)
	}
}

SVGCanvas.addEventListener('mouseup', () => {
	Node.nodeDragged?.endMove()
	Node.nodeDragged = null
	SVGCanvas.removeEventListener('mousemove', mouseMoveHandler)
})

SVGCanvas.addEventListener('mouseleave', () => {
	Node.nodeDragged?.endMove()
	Node.nodeDragged = null
	SVGCanvas.removeEventListener('mousemove', mouseMoveHandler)
})