import { Editor } from "./classes/Editor"

let SVGCanvas: SVGSVGElement = document.querySelector<SVGSVGElement>('#canvas') || document.createElementNS('http://www.w3.org/2000/svg', 'svg')

const editor = new Editor(SVGCanvas)
editor.init()