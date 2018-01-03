export interface Observer {
    update(val?: any): any;
}

export default class Subject<S> {
    private observersMap: Map<S, Observer[]>;

    protected constructor() {
		this.observersMap = new Map<S, Observer[]>();
	}

	add(state: S, observer: Observer): Subject<S> {
        this.observersMap.set(state, this.getObservers(state).concat(observer));
        return this;
	}

	remove(state: S, observer: Observer): Subject<S> {
        const observers: Observer[] = this.getObservers(state);
        const idx = observers.indexOf(observer);

        idx !== -1 && observers.splice(idx, 1);
        
        return this;
    }
    
    removeAll(state: S) {
        this.observersMap.delete(state);
    }

	notify(state: string, value: any): Subject<S> {
        this.observersMap
            .forEach((observers, key) => key.toString() === state && observers.forEach(observer => observer.update(value)));
        return this;
    }
    
    private getObservers(key: S): Observer[] {
        return this.observersMap.get(key) || [];
    }
}
