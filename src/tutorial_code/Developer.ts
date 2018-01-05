import Person from "./Person";

class Developer extends Person {
    private position: string;
    constructor(name: string, job: string, age: number, isWorking: boolean) {
        super(name, job, age, isWorking);
    }

    sayName() {
        console.log(`override method! ${this.name}`);
    }

    isWork() {
        console.log(this.isWorking);
    }
}

export default Developer;
