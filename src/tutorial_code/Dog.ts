// Decorator to method
function chaining(target: any, key: string, descriptor: PropertyDescriptor): any {
    console.log(target); // object
    console.log(key); // string
    console.log(descriptor); // object
    console.log(`----------------------------------`);
    const fn: Function = descriptor.value;
    console.log(descriptor.value);

    // descriptor.value 실제로 실행되는 함수.
    // 이 녀석을 변경해준다.
    descriptor.value = function(...args: any[]) {
        // 여기서 args는 해당 메소드로 넘어오는 파라미터를 가리키게 된다.
        // apply(호출될 함수의 this, arguments)
        // 여기서는 arguments 유사 배열 객체대신 rest parameter로 받은 파라미터를 전달한다.
        fn.apply(target, args);

        return target;
    }
}

// Decorator to class
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

// Decorator with parameter, currying
function addAge(age: number) {
}

@classDecorator
class Dog {
    private name: string;

    constructor(name: string) {
        console.log(`constructor created with:: ${name}`);
        this.name = name;
    }

    @chaining
    bark(withSound: string) {
        console.log(`Waall ${withSound}`);
    }

}

export default Dog;
