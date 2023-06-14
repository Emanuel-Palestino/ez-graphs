import { editor } from '../editor'
import { BFSExecutionResult, DFSExecutionResult } from '../models/interfaces'


// FUNCTIONS
export const sleep = (ms: number): Promise<void> => {
	return new Promise((resolve, reject) => setTimeout(() => {
		const subscription = editor.getObservable().subscribe({
			next: paused => {
				if (!paused) {
					subscription.unsubscribe()
					resolve()
				}
			},
			complete: () => {
				console.log('Execution Finalized')
				reject()
			}
		})

		if (!editor.isExecutionPaused()) {
			subscription.unsubscribe()
			return resolve()
		}
	}, ms))
}

// RESULTS
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

export const showDFSResult = (result: DFSExecutionResult): void => {
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

	// Add finished row
	const finishedRow = table.insertRow()
	finishedRow.insertCell().outerHTML = '<th>Finished</th>'
	for (const finished of result.Finished)
		finishedRow.insertCell().innerHTML = finished

	// Add previous row
	const previousRow = table.insertRow()
	previousRow.insertCell().outerHTML = '<th>Previous</th>'
	for (const previous of result.Previous)
		previousRow.insertCell().innerHTML = previous
}