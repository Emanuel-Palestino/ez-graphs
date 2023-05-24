export class Modal {
	public dialog: HTMLDialogElement
	private cancelBtn: HTMLButtonElement
	private acceptBtn: HTMLButtonElement

	constructor(id: string) {
		this.dialog = document.getElementById(id) as HTMLDialogElement
		this.cancelBtn = this.dialog.querySelector<HTMLButtonElement>('button[modal-cancel]') as HTMLButtonElement
		this.acceptBtn = this.dialog.querySelector<HTMLButtonElement>('button[modal-accept]') as HTMLButtonElement
	}

	public show(fn: (e: MouseEvent) => void) {
		this.dialog.showModal()
		this.cancelBtn.addEventListener('click', () => this.dialog.close(), { once: true })
		this.acceptBtn.addEventListener('click', (e: MouseEvent) => {
			fn(e)
			this.dialog.close()
		}, { once: true })
	}

	public async showAsync(): Promise<MouseEvent | null> {
		this.dialog.showModal()

		return new Promise(resolve => {
			this.cancelBtn.addEventListener('click', () => {
				this.dialog.close()
				resolve(null)
			}, { once: true })

			this.dialog.addEventListener('close', () => resolve(null), { once: true })

			this.acceptBtn.addEventListener('click', (e: MouseEvent) => {
				resolve(e)
				this.dialog.close()
			}, { once: true })
		})
	}
}
