import { Observer } from '../Subject';

export default class Footer implements Observer {
    public update(val: any = 'no value') {
        console.log(`Footer Update:: ${val}`);
    };
}
