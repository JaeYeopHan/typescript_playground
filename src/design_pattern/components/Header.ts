import { Observer } from '../Subject';
import { StateKey } from '../State';

export default class Header implements Observer<StateKey> {
    public invoke(val: StateKey): void {
        console.log(`Header Update:: ${val}`);
    };
}
