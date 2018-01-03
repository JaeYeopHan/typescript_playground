import { Observer } from '../Subject';

export default class Header implements Observer {
    public update(val: any = 'no value') {
        console.log(`Header Update:: ${val}`);
    };
}
