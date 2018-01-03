import { Observer } from '../Subject';

export default class TodoItem implements Observer {
    public update(val: any): any {
        throw new Error('Not implemented yet.');
    }
}
