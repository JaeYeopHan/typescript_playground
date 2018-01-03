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

        state
            .add("title", header)
            .add("author", footer)
            .add("updatedDate", header)
            .add("updatedDate", footer);

        state.updateTitle("new Title ");
        state.updateAuthor("new Author");
        state.updateLatestDate(20170102);

        state.remove("updatedDate", header);
        // state.remove("dd", header);
        state.updateLatestDate(20170103);
    }
}
