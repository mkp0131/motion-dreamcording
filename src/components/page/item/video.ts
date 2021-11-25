import { BaseComponent } from "../../component.js";


export class VideoComponent extends BaseComponent<HTMLElement> {
	constructor(url: string, title: string) {
		super(`<section class="video">
			<div class="video__holder"><iframe class="video__iframe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
			<p class="video__title"></p>
		</section>`);

		const video_element = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
		video_element.src = url
		
		const title_element = this.element.querySelector('.video__title')! as HTMLParagraphElement;
		title_element.textContent = title;
	}
}


