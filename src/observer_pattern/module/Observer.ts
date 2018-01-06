export interface Observer<S> {
    invoke(val?: S): void;
}

export interface Indexable {
    [key: string]: any;
}

export class Subject<SK, I extends Indexable> {
    private observersMap: Map<SK, Observer<SK>[]>;

    protected constructor() {
		this.observersMap = new Map<SK, Observer<SK>[]>();
	}

	connect(stateKey: SK, observer: Observer<SK>): Subject<SK, I> {
        this.observersMap.set(stateKey, this.getObservers(stateKey).concat(observer));
        return this;
	}

	remove(stateKey: SK, observer: Observer<SK>): Subject<SK, I> {
        const observers: Observer<SK>[] = this.getObservers(stateKey);
        const idx = observers.indexOf(observer);

        idx !== -1 && observers.splice(idx, 1);
        
        return this;
    }
    
    removeAll(stateKey: SK): Subject<SK, I> {
        this.observersMap.delete(stateKey);
        return this;
    }

	notify(stateKey: SK, value: any): Subject<SK, I> {
        this.observersMap
            .forEach((observers, key) => key === stateKey && observers.forEach(observer => observer.invoke(value)));
        return this;
    }

    notifyAll(state: I): Subject<SK, I> {
        this.observersMap
            .forEach((observers, key) => observers.forEach(observer => observer.invoke(state[key.toString()])));
        return this;
    }
    
    private getObservers(key: SK): Observer<SK>[] {
        return this.observersMap.get(key) || [];
    }
}
