import Subject from './Subject';

export class State extends Subject {
    private state: Object;

    constructor(state: Object) {
        super();
        this.state = state;
    }

    change() {
        this.notify();
    }

    updateTitle(title: string) {
        this.notify("title", title);
    }

    updateAuthor(authorName: string) {
        this.notify("author", authorName);
    }

    updateLatestDate(updatedDate: number) {
        this.notify("updatedDate", updatedDate);
    }
}
