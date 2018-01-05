import Person from "./Person";
import Developer from './Developer';
import { getMonth, getYear, getRandomNumber, setSpec } from './CalendarUtils';
import { fetchData, fetchDataOf } from "./AjaxUtils";
import Weather from "./Weather";
import { buildTimeStamp, buildTimeText, buildTime } from './TimeUtils';
import { fetchDataParam, DataFormat, BaseUrl, Book, Cup, Doll } from "./interfaces";
import Movable from "./Movable";
import Dog from './Dog';
import Car from './Car';
import Basket from "./Basket";

class Controller {
    // private weather: Weather;

    constructor() {
        // this.test();,
        // this.ajax();
        // this.weather = new Weather();
        // this.time();
        // this.index();
        // this.car();
        // this.generics();
        // this.advgenerics();
        this.decorator();
    }

    private decorator() {
        const dog = new Dog("candy");
    }

    private async advgenerics() {
        const baseUrl: string = "http://localhost:3000/users";
        const data: DataFormat = await fetchDataOf<string, DataFormat>(baseUrl);
        console.log(data);
    }

    private generics() {
        const bookBasket = new Basket<Book>();
        const cupBasket = new Basket<Cup>();
        const dollBasket = new Basket<Doll>();
    }

    private test() {
        const p1: Person = new Person("Jbee", "Developer", 25, true);
        
        console.log(p1.name);
        p1.name = "Jobs"
        console.log(p1.name);

        console.log(p1.job);
        
        p1.sayName(false, "option required");
        p1.sayName("FrontEnd");
        // p1.sayName(1); // Error
        // p1.sayName();
        // p1.sayName(false);
        const devPerson = new Developer("Jbee", "Developer", 25, true);
        devPerson.sayName();
        devPerson.isWork();

        console.log(getMonth("201712"));
        console.log(getRandomNumber(1));
        setSpec("Computer Science");
    }

    private async ajax(): Promise<DataFormat> {
        const param: fetchDataParam = {
            baseUrl: "http://localhost:3000",
            subject: "users",
            type: "application/json"
        };
        const data: DataFormat = await fetchData(param);
        console.log(data);
        return data;
    }

    private time() {
        console.log(buildTimeStamp(12, 33)); //1233
        console.log(buildTimeText(12, 33)); //12시 33분
        console.log(buildTime("12:33", buildTimeStamp)); //1233
        console.log(buildTime("12:33", buildTimeText)); //12시 33분
    }

    private index() {
        interface Indexable {
            [key: string]: any;
        };
        const obj: Indexable = {
            first: 1,
            second: 2,
        };

        Object.keys(obj).forEach((key: string) => obj[key]);
    }

    private car() {
        const bmw: Movable = new Car(100);

        bmw.move(22);
    }
}

export default Controller;
