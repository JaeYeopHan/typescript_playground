import Person from "./Person";

class Controller {
    constructor() {
        const p1 = new Person("Jbee", "Han");

        console.log(p1.getFullName());
    }
}

export default Controller;
