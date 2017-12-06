import Person from "./Person";

class Controller {
    constructor() {
        const p1 = new Person("Jbee", "Han", 25, true);

        console.log(p1.firstName);
    }
}

export default Controller;
