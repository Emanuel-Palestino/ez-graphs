import { editor } from "./editor"
import { activateButton } from "./utils/menu"

editor.init()

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