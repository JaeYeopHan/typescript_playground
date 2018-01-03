import { State, StateKey } from './State';
import Header from "./components/Header";
import Footer from './components/Footer';

export default class Controller {
    constructor() {
        // Initialize state
        const state = new State({
            TITLE: "Observer pattern Example",
            AUTHOR: "jbee",
            UPDATE_DATE: 20170102,
        });

        // Init View Components.
        const header = new Header();
        const footer = new Footer();

        state
            .add(StateKey.TITLE, header)
            .add(StateKey.AUTHOR, footer)
            .add(StateKey.UPDATE_DATE, header)
            .add(StateKey.UPDATE_DATE, footer);

        // state.update(StateKey.UPDATE_DATE, "first title");
        state.update(StateKey.TITLE, "new Title1");
        state.update(StateKey.AUTHOR, "new Author");
        state.update(StateKey.UPDATE_DATE, 20170102);

        state.remove(StateKey.UPDATE_DATE, header);
        // state.remove("dd", header);
        state.update(StateKey.UPDATE_DATE, 20170103);
    }
}
