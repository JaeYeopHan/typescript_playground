import Subject from './Subject';

export enum StateKey {
    TITLE = "title",
    AUTHOR = "author",
    UPDATE_DATE = "updatedDate",
}

export class State extends Subject<StateKey> {
    private state: Object;

    constructor(state: object) {
        super();
        this.state = state;
    }

    update(key: StateKey, newData: any): State {
        this.notify(key, newData);
        this.state = {...this.state, key: newData};
        return this;
    }
}
