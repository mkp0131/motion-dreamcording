import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
	private readonly page: PageComponent;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);

		const image = new ImageComponent('https://picsum.photos/200/300', 'random');
		image.attachTo(appRoot, 'beforeend');

		const video = new VideoComponent('https://www.youtube.com/embed/KBkc42lHd54', '편집자가 퇴사할 뻔한 나이키 광고');
		video.attachTo(appRoot, 'beforeend');


		const note = new NoteComponent('노트 제목', '@@@@@@@@@@@@ 메모 @@@@@@@@@@');
		note.attachTo(appRoot, 'beforeend');

		const todo = new TodoComponent('투두 타이틀', '!! 리스트');
		todo.attachTo(appRoot, 'beforeend');


	}
}

new App(document.querySelector('.js-document')! as HTMLElement);