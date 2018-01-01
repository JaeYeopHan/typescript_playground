import { Observer } from './interfaces/index';

export default class Subject {
    private observers: Observer[];

    constructor() {
		this.observers = [];
	}

	add(observer: Observer): Subject {
        this.observers.push(observer);
        return this;
	}

	remove(observer: Observer): Subject {
        const idx = this.observers.indexOf(observer);
        if (idx !== -1) {
            this.observers.slice(idx, 1);
        }
        
        return this;
	}

	notify(val?: any): Subject {
        this.observers.forEach(observer => observer.update(val));
        return this;
	}
}
