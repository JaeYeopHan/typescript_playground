export default function() {
        // Type Inference
    // let name = `jbee`;

    // console.log(name);
    // name = `ee`;

    // name = 1;

    const mixedArr = [0, 1, `jbee`];
    console.log(mixedArr);
    mixedArr.push(undefined);
    console.log(typeof mixedArr);
    console.log(mixedArr);

    // let x = {name: `Jbee`};
    // let y = {name: `James`, age: 34};

    // x = y; // OK!
    // y = x; // Error!

    let x = (a: number) => 0;
    let y = (b: number, s: string) => 0;

    y = x; // OK
    // x = y; // Error
    function doSomething(x: number | string) {
        if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
            // console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
            console.log(x.substr(1)); // OK
        } else {
            console.log(typeof x); // number
        }
        // x.substr(1); // Error: There is no guarantee that `x` is a `string`
    }

    doSomething(1);

    class Pet {
        name = 123;
        common = '123';
    }

    class Basket {
        size = 123;
        common = '123';
    }

    function create(arg: Pet | Basket) {
        if (arg instanceof Pet) {
            console.log(arg.name); // OK
            // console.log(arg.size); // Error!
        }
        if (arg instanceof Basket) {
            // console.log(arg.name); // Error!
            console.log(arg.size); // OK
        }

        console.log(arg.common); // OK
        // console.log(arg.name); // Error!
        // console.log(arg.size); // Error!
    }

    interface A {
        x: number;
    }
    interface B {
        y: string;
    }
      
    function doStuff(q: A | B) {
        if ('x' in q) {
          // q: A
        }
        else {
          // q: B
        }
    }

    type Foo = {
        kind: 'foo', // Literal type 
        foo: number
    }
    type Bar = {
        kind: 'bar', // Literal type 
        bar: number
    }

    function execute(arg: Foo | Bar) {
        if (arg.kind === 'foo') {
            console.log(arg.foo); // OK
            // console.log(arg.bar); // Error!
        }
        else {  // MUST BE Bar!
            // console.log(arg.foo); // Error!
            console.log(arg.bar); // OK
        }
    }

    function isA(arg: any): arg is A {
        return arg.x !== undefined;
    }
}
