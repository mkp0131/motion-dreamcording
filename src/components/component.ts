



export interface IBaseComponent {
	attachTo(parent: HTMLElement, position?: InsertPosition): void;
	removeForm(parent: HTMLElement): void;
}


export class BaseComponent<T extends HTMLElement> implements IBaseComponent {

	protected element: T;

	constructor(html: string) {
		const template: HTMLTemplateElement = document.createElement('template');
		template.innerHTML = html;
		this.element = template.content.firstElementChild! as T;
	}

	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
		parent.insertAdjacentElement(position, this.element);
	}
	
	removeForm(parent: HTMLElement) {
		if(parent !== this.element.parentElement) {
			throw new Error("Parent mismatching!!");
		}
		parent.removeChild(this.element);
	}

}
