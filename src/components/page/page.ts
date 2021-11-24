import { BaseComponent } from "../component.js";

export class PageComponent extends BaseComponent<HTMLUListElement> {

	constructor() {
		super('<ul>this is page!</ul>');
	}
	
}