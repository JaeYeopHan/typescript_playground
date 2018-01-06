import { Observer } from '../module/Observer';
import { StateKey, State } from '../State';

export default class Header implements Observer<StateKey> {
    private readonly props: State;

    constructor(props: State) {
        this.props = props;
    }

    public invoke(val: StateKey): void {
        console.log(`Header Update:: ${val}`);
    };
}
