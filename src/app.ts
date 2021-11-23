import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";

class App {
	private readonly page: PageComponent;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);

		const image = new ImageComponent('https://picsum.photos/200/300', 'random');
		image.attachTo(appRoot, 'beforeend');
	}
}

new App(document.querySelector('.js-document')! as HTMLElement);