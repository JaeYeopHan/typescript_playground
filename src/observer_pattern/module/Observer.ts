export interface Observer<S> {
    invoke(val?: S): void;
}

export interface Indexable {
    [key: string]: any;
}

export class Subject<S> {
    private observersMap: Map<S, Observer<S>[]>;

    protected constructor() {
		this.observersMap = new Map<S, Observer<S>[]>();
	}

	add(state: S, observer: Observer<S>): Subject<S> {
        this.observersMap.set(state, this.getObservers(state).concat(observer));
        return this;
	}

	remove(state: S, observer: Observer<S>): Subject<S> {
        const observers: Observer<S>[] = this.getObservers(state);
        const idx = observers.indexOf(observer);

        idx !== -1 && observers.splice(idx, 1);
        
        return this;
    }
    
    removeAll(state: S): Subject<S> {
        this.observersMap.delete(state);
        return this;
    }

	notify(state: string, value: any): Subject<S> {
        this.observersMap
            .forEach((observers, key) => key.toString() === state && observers.forEach(observer => observer.invoke(value)));
        return this;
    }

    notifyAll(): Subject<S> {
        this.observersMap
            .forEach((observers, key) => observers.forEach(observer => observer.invoke(key)));
        return this;
    }
    
    private getObservers(key: S): Observer<S>[] {
        return this.observersMap.get(key) || [];
    }
}
