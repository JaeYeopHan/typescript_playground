export default class Person {
    public _firstName: string;
    private lastName: string;
    private readonly age: number;
    protected isWorking: boolean;

    constructor(firstName: string, lastName: string, age: number, isWorking: boolean) {
        this._firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public setFirstName(name: string): void {
        this._firstName = name;
    }
}
