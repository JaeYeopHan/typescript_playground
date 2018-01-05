import {WeatherSpec} from "./interfaces";

class Weahter {
    constructor() {
        this.init();
    }

    private init(): void {
        const rainfall: WeatherSpec = {
            type: "rainfall",
            amount: 24,
        };
        rainfall.amount += 3;

        console.log(rainfall);
    }
}

export default Weahter;
