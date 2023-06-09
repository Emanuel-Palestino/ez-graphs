import { BFS } from "./algorithms/BFS"
import { DFS } from "./algorithms/DFS"
import { Modal } from "./classes/Modal"
import { editor } from "./editor"
import { activateButton, deactivateAllButtons } from "./utils/menu"

editor.init()

// MODALS
const newGraphModal = new Modal('new_graph_modal')

// Select
const algorithmSelect = document.querySelector<HTMLSelectElement>('#algorithm_execution')!

// GRAPH BUTTONS
const btnNewGraph = document.querySelector<HTMLButtonElement>('#btn-new_graph')!
btnNewGraph.addEventListener('click', async () => {
	const e = await newGraphModal.showAsync()
	const form = document.querySelector<HTMLFormElement>('#new_graph_form')!
	if (e) {
		e.preventDefault()
		const data = new FormData(form)
		editor.createNewGraph(data.get('graph_type') === 'directed', !!data.get('weighted_graph'), !!data.get('autoname'))
		btnCleanGraph.disabled = false

		btnDrawNode.disabled = false
		btnDrawEdge.disabled = false
		btnDeleteElement.disabled = false

		algorithmSelect.disabled = false
		btnPlay.disabled = false
	}
	form.reset()
	form.querySelector<HTMLInputElement>('#autoname')!.checked = true
})

const btnCleanGraph = document.querySelector<HTMLButtonElement>('#btn-clean_graph')!
btnCleanGraph.addEventListener('click', () => {
	editor.cleanGraph()
	deactivateAllButtons()
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
btnPlay.addEventListener('click', async () => {
	algorithmSelect.disabled = true
	btnPause.disabled = false
	btnStop.disabled = false
	activateButton(btnPlay)

	// Disable graph buttons
	btnNewGraph.disabled = true
	btnCleanGraph.disabled = true

	// Disable drawing buttons
	btnDrawNode.disabled = true
	btnDrawEdge.disabled = true
	btnDeleteElement.disabled = true

	editor.disableDrawing()

	// Algorithm execution
	switch (algorithmSelect.value) {
		case 'bfs':
			let resultBFS = BFS('node_1', editor.getNodes(), editor.getAdyacencyList())
			console.log(resultBFS.Nodes)
			console.log(resultBFS.Distance)
			console.log(resultBFS.Previous)
			break
		case 'dfs':
			let result = await DFS('node_1', editor.getNodes(), editor.getAdyacencyList())
			console.log(result.Nodes)
			console.log(result.Distance)
			console.log(result.Finished)
			console.log(result.Previous)
			break

		default:
			console.log('No algorithm selected')
	}
})

// Pause button
const btnPause = document.querySelector<HTMLButtonElement>('#btn-pause_execution')!
btnPause.addEventListener('click', () => {
	activateButton(btnPause)

	console.log('pause')
})

// Stop button
const btnStop = document.querySelector<HTMLButtonElement>('#btn-stop_execution')!
btnStop.addEventListener('click', () => {
	deactivateAllButtons()
	btnPause.disabled = true
	btnStop.disabled = true

	algorithmSelect.disabled = false

	// Enable graph buttons
	btnNewGraph.disabled = false
	btnCleanGraph.disabled = false

	// Enable drawing buttons
	btnDrawNode.disabled = false
	btnDrawEdge.disabled = false
	btnDeleteElement.disabled = false

	console.log('stop')
})

// Clean button
const btnClean = document.querySelector<HTMLButtonElement>('#btn-clean_execution')!
btnClean.addEventListener('click', () => {
	console.log('clean')
})

const btnResults = document.querySelector<HTMLButtonElement>('#btn-show_results')!
btnResults.addEventListener('click', () => {
	if (btnResults.classList.contains('active')) {
		deactivateAllButtons()

		// Enable drawing buttons
		btnDrawNode.disabled = false
		btnDrawEdge.disabled = false
		btnDeleteElement.disabled = false
	} else {
		activateButton(btnResults)
		editor.disableDrawing()

		// Disable drawing buttons
		btnDrawNode.disabled = true
		btnDrawEdge.disabled = true
		btnDeleteElement.disabled = true
	}

	document.getElementById('editor_body')!.classList.toggle('showing-results')
})