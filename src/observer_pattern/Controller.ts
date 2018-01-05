import { State, StateKey } from './State';
import {
    Header,
    TodoItem,
    Footer,
} from "./components/index";

export default class Controller {
    constructor() {
        // Initialize state
        const state: State = new State({
            title: "Observer pattern Example",
            author: "jbee",
            updatedDate: 20170102,
        });

        // Init View Components.
        const header = new Header(state);
        const todoItem = new TodoItem(state);
        const footer = new Footer(state);

        // connect
        state
            .add(StateKey.TITLE, header)
            .add(StateKey.AUTHOR, footer)
            .add(StateKey.UPDATE_DATE, header)
            .add(StateKey.UPDATE_DATE, footer);

        state
            .update(StateKey.TITLE, "new Title")
            .update(StateKey.AUTHOR, "new Author")
            .update(StateKey.UPDATE_DATE, 20170102);

        state.remove(StateKey.UPDATE_DATE, header);
        // state.remove("dd", header);
        state.update(StateKey.UPDATE_DATE, 20170103);
    }
}
