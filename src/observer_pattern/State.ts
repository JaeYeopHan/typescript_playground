import { StateInterface } from './State';
import { Subject, Indexable } from './module/Observer';

export const enum StateKey {
    TITLE = "title",
    AUTHOR = "author",
    UPDATE_DATE = "updatedDate",
}

export interface StateInterface extends Indexable {
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

    update(key: StateKey, newData: string | number): State {
        if (typeof this.state[key] !== typeof newData) {
            return ;
        }
        this.notify(key, newData);
        this.state = {...this.state, ...{key: newData}} as StateInterface;
        return this;
    }

    refresh() {
        // TODO 기존의 인자를 추가하기
        this.notifyAll( );
    }
}
