import { editor } from "./editor"
import { activateButton } from "./utils/menu"

editor.init()

// GRAPH BUTTONS
const btnNewGraph = document.querySelector<HTMLButtonElement>('#btn-new_graph')
btnNewGraph?.addEventListener('click', () => {
	document.querySelector<HTMLDialogElement>('#new_graph_modal')?.showModal()
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