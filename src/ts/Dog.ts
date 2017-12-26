function wrapping(target: any, key: any, descriptor: any): any {
    console.log(target);
    console.log(key);
    console.log(descriptor);
}

function sound(target: any, key: any, descriptor: any): any {
    console.log(target);
    console.log(key);
    console.log(descriptor);
}

class Dog {
    // @wrapping
    // private name: string;

    // constructor(name: string) {
    //     this.name = name;
    // }

    // @sound
    // bark() {
    //     console.log(`Waall`);
    // }

}

export default Dog;
