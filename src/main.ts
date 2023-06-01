import { BFS } from "./algorithms/BFS"
import { DFS } from "./algorithms/DFS"
import { Modal } from "./classes/Modal"
import { editor } from "./editor"
import { activateButton } from "./utils/menu"

editor.init()

// MODALS
const newGraphModal = new Modal('new_graph_modal')

// GRAPH BUTTONS
const btnNewGraph = document.querySelector<HTMLButtonElement>('#btn-new_graph')!
btnNewGraph.addEventListener('click', async () => {
	const e = await newGraphModal.showAsync()
	const form = document.querySelector<HTMLFormElement>('#new_graph_form')!
	if (e) {
		e.preventDefault()
		const data = new FormData(form)
		editor.createNewGraph(data.get('graph_type') === 'directed', !!data.get('weighted_graph'), !!data.get('autoname'))
		btnDrawNode.disabled = false
		btnDrawEdge.disabled = false
		btnDeleteElement.disabled = false
		btnCleanGraph.disabled = false
		btnPlay.disabled = false
	}
	form.reset()
	form.querySelector<HTMLInputElement>('#autoname')!.checked = true
})

const btnCleanGraph = document.querySelector<HTMLButtonElement>('#btn-clean_graph')!
btnCleanGraph.addEventListener('click', () => {
	console.log('clean graph')
})


// DRAWING BUTTONS

// Draw node button
const btnDrawNode = document.querySelector<HTMLButtonElement>('#btn-draw_node')!
btnDrawNode.addEventListener('click', () => {
	editor.switchDrawingNode()

	activateButton(btnDrawNode)
})

// Draw edge button
const btnDrawEdge = document.querySelector<HTMLButtonElement>('#btn-draw_edge')!
btnDrawEdge.addEventListener('click', () => {
	editor.switchDrawingEdge()

	activateButton(btnDrawEdge)
})

// Delete element button
const btnDeleteElement = document.querySelector<HTMLButtonElement>('#btn-delete_element')!
btnDeleteElement.addEventListener('click', () => {
	editor.switchDeletingElement()

	activateButton(btnDeleteElement)
})


// EXECUTION BUTTONS

// Play button
const btnPlay = document.querySelector<HTMLButtonElement>('#btn-play_execution')!
btnPlay.addEventListener('click', () => {
	//console.log('play', editor.getAdyacencyList())
	let result = BFS('node_1', editor.getNodes(), editor.getAdyacencyList())
	console.log(result.Nodes)
  	console.log(result.Distance)
  	console.log(result.Previous)
})