import { Editor } from "./classes/Editor"

const SVGCanvas: SVGSVGElement = document.querySelector<SVGSVGElement>('#canvas') || document.createElementNS('http://www.w3.org/2000/svg', 'svg')

export const editor = new Editor(SVGCanvas)