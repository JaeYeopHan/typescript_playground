import Subject from './Subject';

export enum StateKey {
    TITLE = "title",
    AUTHOR = "author",
    UPDATE_DATE = "updatedDate",
}

export class State extends Subject<StateKey> {
    private state: Object;

    constructor() {
        super();
        this.state = {
            title: "Observer pattern Example",
            author: "jbee",
            updatedDate: 20170102,
        };
    }

    update(key: StateKey, newData: any): State {
        this.notify(key, newData);
        this.state = {...this.state, key: newData};
        return this;
    }
}
