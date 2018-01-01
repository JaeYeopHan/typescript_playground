import { Observer } from '../interfaces/index';

export default class Header {
    update(val: any = 'no value') {
        console.log(`Hedaer Update:: ${val}`);
    };
}
