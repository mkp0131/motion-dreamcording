import { BaseComponent } from "../../component.js";



export class NoteComponent extends BaseComponent<HTMLElement> {

	constructor(title: string, memo: string) {
		super(`<section class="note">
			<h3 class="note__title"></h3>
			<p class="note__body"></p>
		</section>`);

		const note_title = this.element.querySelector('.note__title')! as HTMLHeadingElement;
		note_title.textContent = title;

		const note_body = this.element.querySelector('.note__body')! as HTMLHeadingElement;
		note_body.textContent = memo;
	}

}