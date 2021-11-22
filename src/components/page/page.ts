export class PageComponent {
	private element: HTMLUListElement;
	constructor() {
		this.element = document.createElement('ul');
		this.element.classList.add('page');
		this.element.innerText = 'this is page!';
	}

	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
		parent.insertAdjacentElement(position, this.element);
	}
}