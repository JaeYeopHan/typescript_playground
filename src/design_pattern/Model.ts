import Subject from './Subject';

export class Model extends Subject {
    change() {
        return this.notify();
    }

    setItem(item: any) {
        this.notify(item);
    }
}
