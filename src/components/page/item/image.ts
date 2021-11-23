



export class ImageComponent {
	private element: HTMLElement
	constructor(url: string, title: string) {
		const template:HTMLTemplateElement = document.createElement('template');
		template.innerHTML = `<section class="image">
			<div class="image__holder"><img class="image__thumbnail"></div>
			<p class="image__title"></p>
		</section>`;
		this.element = template.content.firstElementChild! as HTMLElement;
		
		const image_element = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
		image_element.src = url;
		image_element.alt = title;

		const title_element = this.element.querySelector('.image__title')! as HTMLParagraphElement;
		title_element.textContent = title;

	}

	attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
		console.log('@@', );
		parent.insertAdjacentElement(position, this.element);
	}
}