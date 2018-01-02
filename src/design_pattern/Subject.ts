import { Observer } from './interfaces/index';

export default class Subject {
    private observers: Map<string, Observer>;

    constructor() {
		this.observers = new Map();
	}

	add(state: string, observer: Observer): Subject {
        this.observers.set(state, observer);
        return this;
	}

	remove(state: string, observer: Observer): Subject {
        const selectedObserver = this.observers.get(state);
        if (!selectedObserver) {
            this.observers.delete(state);
        }
        
        return this;
	}

	notify(state?: any, target?: any): Subject {
        Array.from(this.observers)
            .filter(val => val[0] === state)
            .forEach(val => {
                const obs: Observer = val[1] as Observer;

                obs.update(target);
            });
        return this;
	}
}
