import Person from "./Person";
import Developer from './Developer';

class Controller {
    constructor() {
        const p1 = new Person("Jbee", "Developer", 25, true);

        console.log(p1.name);
        p1.name = "Jobs"
        console.log(p1.name);

        console.log(p1.job);

        const devPerson = new Developer("Jbee", "Developer", 25, true);
        devPerson.sayName();
        devPerson.isWork();
    }
}

export default Controller;
