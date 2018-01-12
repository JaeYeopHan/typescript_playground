import { State, StateKey, StateInterface } from '../State';
import {
    Header,
    TodoItem,
    Footer,
} from "../components/index";

export default class TodoContainer {
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
            .connect(StateKey.TITLE, header)
            .connect(StateKey.AUTHOR, footer)
            .connect(StateKey.UPDATED_DATE, header)
            .connect(StateKey.UPDATED_DATE, footer);

        state
            .dispatch(StateKey.TITLE, "new Title")
            .dispatch(StateKey.AUTHOR, "new Author")
            .dispatch(StateKey.TITLE)
            .dispatch(StateKey.UPDATED_DATE, 20170102);

        state.remove(StateKey.UPDATED_DATE, header);
        // state.remove("dd", header);
        state.dispatch(StateKey.UPDATED_DATE, 20170103);
    }
}
