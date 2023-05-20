const menu = document.querySelector<HTMLMenuElement>('menu')

const deactivateAllButtons = () => {
	menu?.querySelectorAll('section ul li button').forEach(btn => {
		btn.classList.remove('active')
	})
}

export const activateButton = (btn: HTMLButtonElement) => {
	deactivateAllButtons()
	btn.classList.add('active')
}