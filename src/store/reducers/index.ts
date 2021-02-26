import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import queryReducer from "./queryReducer";

export default combineReducers({
    products: productsReducer,
    query: queryReducer,
});
