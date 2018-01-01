import { Observer } from '../interfaces/index';

export default class Footer implements Observer {
    update(val: any = 'no value') {
        console.log(`Footer Update:: ${val}`);
    };
}
