import { Modal } from "./classes/Modal"
import { editor } from "./editor"
import { activateButton } from "./utils/menu"

editor.init()

// MODALS
const newGraphModal = new Modal('new_graph_modal')

// GRAPH BUTTONS
const btnNewGraph = document.querySelector<HTMLButtonElement>('#btn-new_graph')
btnNewGraph?.addEventListener('click', async () => {
	const e = await newGraphModal.showAsync()
	if (e) {
		e.preventDefault()
		console.log('aceptado')
	} else {
		console.log('cancelado')
	}
})


// DRAWING BUTTONS

// Draw node button
const btnDrawNode = document.querySelector<HTMLButtonElement>('#btn-draw_node')
btnDrawNode?.addEventListener('click', () => {
	editor.switchDrawingNode()

	activateButton(btnDrawNode)
})

// Draw edge button
const btnDrawEdge = document.querySelector<HTMLButtonElement>('#btn-draw_edge')
btnDrawEdge?.addEventListener('click', () => {
	editor.switchDrawingEdge()

	activateButton(btnDrawEdge)
})

// Delete element button
const btnDeleteElement = document.querySelector<HTMLButtonElement>('#btn-delete_element')
btnDeleteElement?.addEventListener('click', () => {
	editor.switchDeletingElement()

	activateButton(btnDeleteElement)
})