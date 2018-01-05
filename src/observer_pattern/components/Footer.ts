import { Observer } from '../module/Observer';
import { StateKey, State } from '../State';

export default class Footer implements Observer<StateKey> {
    private props: State;

    constructor(props: State) {
        this.props = props;
    }

    public invoke(val: StateKey): void {
        console.log(`Footer Update:: ${val}`);
    };
}
