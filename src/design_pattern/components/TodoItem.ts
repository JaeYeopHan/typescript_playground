import { Observer } from '../Subject';
import { StateKey } from '../State';

export default class TodoItem implements Observer<StateKey> {
    public invoke(val: StateKey): void {
        throw new Error('Not implemented yet.');
    }
}
