import { StateInterface } from './State';
import { Subject, Indexable } from './module/Observer';

export const enum StateKey {
    TITLE = "title",
    AUTHOR = "author",
    UPDATED_DATE = "updatedDate",
}

export interface StateInterface extends Indexable {
    title: string;
    author: string;
    updatedDate: number;
}

export class State extends Subject<StateKey, StateInterface> {
    private state: StateInterface;

    constructor(state: StateInterface) {
        super();
        this.state = state;
    }

    dispatch(key: StateKey, newData?: string | number): State {
        if (typeof this.state[key] !== typeof newData) {
            this.notify(key, this.state[key]);
            return this;
        }
        this.notify(key, newData);
        this.state = {...this.state, ...{[key]: newData}};
        return this;
    }

    forcedUpdate(key: StateKey, newData?: string | number): State {
        this.state = {...this.state, ...{[key]: newData}};
        return this;
    }
}
