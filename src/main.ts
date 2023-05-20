import { editor } from "./editor"
import { DrawingElement } from "./models/enums"
import { activateButton } from "./utils/menu"

editor.init()

// Draw node button
const btnDrawNode = document.querySelector<HTMLButtonElement>('#btn-draw_node')
btnDrawNode?.addEventListener('click', () => {
	editor.drawing = DrawingElement.Node

	activateButton(btnDrawNode)
})

// Draw edge button
const btnDrawEdge = document.querySelector<HTMLButtonElement>('#btn-draw_edge')
btnDrawEdge?.addEventListener('click', () => {
	editor.drawing = DrawingElement.Edge

	activateButton(btnDrawEdge)
})