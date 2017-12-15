export default class Person {
    public _name: string;
    private _job: string;
    public readonly age: number;
    protected isWorking: boolean;

    constructor(name: string, job: string, age: number, isWorking: boolean) {
        this._name = name;
        this._job = job;
        this.age = age;
        this.isWorking = isWorking;
    }

    sayName(position: string, option?: string): void;
    sayName(position: boolean, option: string): void;
    sayName(position: any, option: any): any {
        if (typeof position === "string") {
            console.log(`string type position`);
        } else if (typeof position === "boolean") {
            console.log(`boolean type position`)
        } else {
            console.log(`else`);
        }
    }

    // sayName(position: string | boolean | number): any {
    //     if (typeof position === "string") {
    //         console.log(`string type position`);
    //     } else if (typeof position === "boolean") {
    //         console.log(`boolean type position`)
    //     } else {
    //         console.log(`else`);
    //     }
    // }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get job() {
        return this._job;
    }

    set job(job: string) {
        this._job = job;
    }
}
