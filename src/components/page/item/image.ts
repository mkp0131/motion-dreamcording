import { BaseComponent } from "../../component.js";




export class ImageComponent extends BaseComponent<HTMLElement> {

	constructor(url: string, title: string) {
		super(`<section class="image">
						<div class="image__holder"><img class="image__thumbnail"></div>
						<p class="image__title"></p>
					</section>`);

		const image_element = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
		image_element.src = url;
		image_element.alt = title;

		const title_element = this.element.querySelector('.image__title')! as HTMLParagraphElement;
		title_element.textContent = title;
	}

}