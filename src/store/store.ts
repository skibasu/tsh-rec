import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const middlewere = [thunk];

export const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(...middlewere))
);
