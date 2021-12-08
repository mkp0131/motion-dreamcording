import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent, Composable } from "./components/page/page.js";
import { IBaseComponent } from "./components/component.js";


class App {
	private readonly page: IBaseComponent & Composable;
	constructor(appRoot: HTMLElement) {
		this.page = new PageComponent();
		this.page.attachTo(appRoot);

		const image = new ImageComponent('https://picsum.photos/200/300', 'random');
		this.page.addChild(image);
		
		const video = new VideoComponent('https://www.youtube.com/embed/KBkc42lHd54', '편집자가 퇴사할 뻔한 나이키 광고');
		this.page.addChild(video);
	


		const note = new NoteComponent('노트 제목', '@@@@@@@@@@@@ 메모 @@@@@@@@@@');
		this.page.addChild(note);

		const todo = new TodoComponent('투두 타이틀', '!! 리스트');
		this.page.addChild(todo);


	}
}

new App(document.querySelector('.js-document')! as HTMLElement);