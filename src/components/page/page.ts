import { BaseComponent, IBaseComponent } from "../component.js";

export interface Composable  {
	addChild(child: IBaseComponent): void;
}

export class PageItemComponent extends BaseComponent<HTMLLIElement> implements Composable  {

	constructor() {
		super(`<li class="page-item">
						<section class="page-item__body"></section>
						<div class="page-item__controls">
							<button class="close">&times;</button>
						</div>
					</li>`);
	}

	addChild(child: IBaseComponent) {
		const container = this.element.querySelector('.page-item__body')! as HTMLElement;
		child.attachTo(container);
	}

}



export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable  {

	constructor() {
		super('<ul>this is page!</ul>');
	}
	
	addChild(section: IBaseComponent) {
		const item = new PageItemComponent();
		item.addChild(section);
		item.attachTo(this.element, 'beforeend');
	}


}