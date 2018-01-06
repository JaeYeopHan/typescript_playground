import { Observer } from '../module/Observer';
import { StateKey, State } from '../State';

export default class TodoItem implements Observer<StateKey> {
    private readonly props: State;

    constructor(props: State) {
        this.props = props;
    }

    public invoke(val: StateKey): void {
        console.log(`Change state of TodoItem component: ${val}`);
    }
}
