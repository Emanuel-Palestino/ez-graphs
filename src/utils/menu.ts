const menu = document.querySelector<HTMLMenuElement>('menu')

export const deactivateAllButtons = () => {
	menu?.querySelectorAll('section ul li button').forEach(btn => {
		btn.classList.remove('active')
	})
}

export const activateButton = (btn: HTMLButtonElement) => {
	deactivateAllButtons()
	btn.classList.add('active')
}

export const disableButtons = (...buttons: (HTMLButtonElement | HTMLSelectElement)[]): () => void => {
	return () => {
		buttons.forEach(btn => {
			btn.disabled = true
		})
	}
}

export const enableButtons = (...buttons: (HTMLButtonElement | HTMLSelectElement)[]): () => void => {
	return () => {
		buttons.forEach(btn => {
			btn.disabled = false
		})
	}
}