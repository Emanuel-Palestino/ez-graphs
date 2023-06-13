import { Modal } from "./classes/Modal"
import { editor } from "./editor"
import { Algorithm } from "./models/enums"
import { activateButton, deactivateAllButtons, disableButtons, enableButtons } from "./utils/menu"

editor.init()

// Modals
const newGraphModal = new Modal('new_graph_modal')

// Select
const algorithmSelect = document.querySelector<HTMLSelectElement>('#algorithm_execution')!


// GRAPH BUTTONS
const btnNewGraph = document.querySelector<HTMLButtonElement>('#btn-new_graph')!
btnNewGraph.addEventListener('click', async () => {
	const e = await newGraphModal.showAsync()
	const form = document.querySelector<HTMLFormElement>('#new_graph_form')!

	// If a new graph is created, enable the buttons
	if (e) {
		e.preventDefault()
		const data = new FormData(form)
		editor.createNewGraph(data.get('graph_type') === 'directed', !!data.get('weighted_graph'), !!data.get('autoname'))

		enableGraphButtons()
		enableDrawingButtons()
		enablePlayExecutionButtons()
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
	activateButton(btnPlay)

	if (editor.isExecutionPaused()) {
		editor.resumeExecution()
		return
	}

	algorithmSelect.disabled = true
	disableGraphButtons()
	disableDrawingButtons()
	enableControlExecutionButtons()

	editor.disableDrawing()
	editor.resetExecution()

	// Algorithm execution
	let algorithmSelected: Algorithm = Algorithm.BFS
	switch (algorithmSelect.value) {
		case 'bfs':
			algorithmSelected = Algorithm.BFS
			break
		case 'dfs':
			algorithmSelected = Algorithm.DFS
			break
	}
	await editor.executeAlgorithm(algorithmSelected)

	// Algorithm execution finished
	disableControlExecutionButtons()
	enableGraphButtons()
	enableDrawingButtons()
	enablePlayExecutionButtons()
	btnResults.disabled = false

	// Trigger results button click
	btnResults.click()
})

// Pause button
const btnPause = document.querySelector<HTMLButtonElement>('#btn-pause_execution')!
btnPause.addEventListener('click', () => {
	activateButton(btnPause)
	editor.pauseExecution()
})

// Stop button
const btnStop = document.querySelector<HTMLButtonElement>('#btn-stop_execution')!
btnStop.addEventListener('click', () => {
	deactivateAllButtons()
	disableControlExecutionButtons()
	enablePlayExecutionButtons()
	enableGraphButtons()
	enableDrawingButtons()
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
		enableDrawingButtons()
		enablePlayExecutionButtons()
	} else {
		activateButton(btnResults)
		editor.disableDrawing()
		disableDrawingButtons()
		disablePlayExecutionButtons()
	}

	document.getElementById('editor_body')!.classList.toggle('showing-results')
})



// Functions
const disableDrawingButtons = disableButtons(btnDrawNode, btnDrawEdge, btnDeleteElement)
const enableDrawingButtons = enableButtons(btnDrawNode, btnDrawEdge, btnDeleteElement)

const disableGraphButtons = disableButtons(btnNewGraph, btnCleanGraph)
const enableGraphButtons = enableButtons(btnNewGraph, btnCleanGraph)

const disablePlayExecutionButtons = disableButtons(algorithmSelect, btnPlay)
const enablePlayExecutionButtons = enableButtons(algorithmSelect, btnPlay)

const disableControlExecutionButtons = disableButtons(btnPause, btnStop)
const enableControlExecutionButtons = enableButtons(btnPause, btnStop)