import { Model } from './Model';
import Header from "./components/Header";
import Footer from './components/Footer';

export default class Controller {
    constructor() {
        console.log(`execute Controller!`);

        const header = new Header();
        const footer = new Footer();
        const model = new Model();

        model.add(header);
        model.add(footer);

        model.change();
    }
}
