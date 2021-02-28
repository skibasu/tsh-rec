import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import queryReducer from "./queryReducer";
import authReducer from "./authReducer";

export default combineReducers({
    products: productsReducer,
    query: queryReducer,
    login: authReducer,
});
