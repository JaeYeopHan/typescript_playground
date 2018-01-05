import { StateInterface } from './State';
import { Subject } from './module/Observer';

export enum StateKey {
    TITLE = "title",
    AUTHOR = "author",
    UPDATE_DATE = "updatedDate",
}

export interface StateInterface {
    title: string;
    author: string;
    updatedDate: number;
}

export class State extends Subject<StateKey> {
    private state: StateInterface;

    constructor(state: StateInterface) {
        super();
        this.state = state;
    }

    update(key: StateKey, newData: any): State {
        this.notify(key, newData);
        this.state = {...this.state, ...{key: newData}} as StateInterface;
        return this;
    }
}
