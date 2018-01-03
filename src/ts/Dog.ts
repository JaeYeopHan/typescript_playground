function sound(target: object, key: string, descriptor: object): any {
    console.log(typeof target);
    console.log(typeof key);
    console.log(typeof descriptor);
}

function animal(target: object, key: string, descriptor: object): any {
    console.log(typeof target);
    console.log(typeof key);
    console.log(typeof descriptor);
}

class Dog {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    @sound
    bark() {
        console.log(`Waall`);
    }

}

export default Dog;
