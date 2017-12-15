import Person from "./Person";
import Developer from './Developer';
import { getMonth, getYear, getRandomNumber, setSpec } from './CalendarUtils';

class Controller {
    constructor() {
        const p1: Person = new Person("Jbee", "Developer", 25, true);

        console.log(p1.name);
        p1.name = "Jobs"
        console.log(p1.name);

        console.log(p1.job);

        p1.sayName(false, "option required");
        p1.sayName("FrontEnd");
        // p1.sayName(1); // Error
        // p1.sayName();
        p1.sayName(false);
        const devPerson = new Developer("Jbee", "Developer", 25, true);
        devPerson.sayName();
        devPerson.isWork();

        console.log(getMonth("201712"));
        console.log(getRandomNumber(1));
        setSpec("Computer Science");
        
    }
}

export default Controller;
