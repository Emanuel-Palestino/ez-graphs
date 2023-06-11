import { BFSExecutionResult } from '../models/interfaces'

export const showBFSResult = (result: BFSExecutionResult): void => {

	const table = document.querySelector<HTMLTableElement>('#algorithm_results table')!

	// Clear table
	table.innerHTML = ''

	// Add nodes row
	const nodesRow = table.insertRow()
	nodesRow.insertCell().outerHTML = '<th>Node</th>'
	for (const node of result.Nodes)
		nodesRow.insertCell().innerHTML = node

	// Add distance row
	const distanceRow = table.insertRow()
	distanceRow.insertCell().outerHTML = '<th>Distance</th>'
	for (const distance of result.Distance)
		distanceRow.insertCell().innerHTML = distance

	// Add previous row
	const previousRow = table.insertRow()
	previousRow.insertCell().outerHTML = '<th>Previous</th>'
	for (const previous of result.Previous)
		previousRow.insertCell().innerHTML = previous
}