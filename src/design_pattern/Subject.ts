import { Observer } from './interfaces/index';

export default class Subject {
    private observersMap: Map<string, Observer[]>;

    protected constructor() {
		this.observersMap = new Map<string, Observer[]>();
	}

	add(state: string, observer: Observer): Subject {
        this.observersMap.set(state, this.getObservers(state).concat(observer));
        return this;
	}

	remove(state: string, observer: Observer): Subject {
        const observers: Observer[] = this.getObservers(state);

        if (observers.length !== 0) {
            const idx = observers.indexOf(observer);

            idx !== -1 && observers.splice(idx, 1);
        }
        
        return this;
    }
    
    removeAll(state: string) {
        this.observersMap.delete(state);
    }

	notify(state: string, value: any): Subject {
        this.observersMap
            .forEach((observers, key) => key === state && observers.forEach(observer => observer.update(value)));
        return this;
    }
    
    private getObservers(key: string): Observer[] {
        return this.observersMap.get(key) || [];
    }
}
