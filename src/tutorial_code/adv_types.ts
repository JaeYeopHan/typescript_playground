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
}
