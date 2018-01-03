import { Observer } from '../Subject';
import { StateKey } from '../State';

export default class Footer implements Observer<StateKey> {
    public invoke(val: StateKey): void {
        console.log(`Footer Update:: ${val}`);
    };
}
