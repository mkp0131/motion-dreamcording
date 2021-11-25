import { BaseComponent } from "../../component.js";


export class TodoComponent extends BaseComponent<HTMLElement> {

	constructor(title: string, todo: string) {

		super(`<section class="todo">
						<h3 class="todo__title"></h3>
						<div class="todo__list">
							<label>
								<input type="checkbox" />
								<span class="todo__txt"></span>
							</label>
						</div>
					</section>`);

		const title_element = this.element.querySelector('.todo__title')! as HTMLHeadingElement;
		title_element.textContent = title;
		const list_element = this.element.querySelector('.todo__txt')! as HTMLSpanElement;
		list_element.textContent = todo;
	}

}