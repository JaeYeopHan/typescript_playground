import { State } from './State';
import Header from "./components/Header";
import Footer from './components/Footer';

export default class Controller {
    constructor() {
        // Init state
        const state = new State({
            title: "Observer pattern Example",
            author: "jbee",
            updatedData: 20170102,
        });

        // Init View Components.
        const header = new Header();
        const footer = new Footer();

        state.add("title", header);
        state.add("author", footer);

        state.change();
        state.updateTitle("new Title ");
        state.updateAuthor("new Author");
    }
}
