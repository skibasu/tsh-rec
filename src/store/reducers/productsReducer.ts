import { TAction } from "../actions/index";
import { EPActionsTypes } from "../action-types";
import { IProduct } from "../../app-models/app.models";

export interface IProductState {
    data: IProduct[];
    loading: boolean;
    error: string | null;
}
const initialState = {
    data: [],
    loading: false,
    error: null,
};

const reducer = (
    state: IProductState = initialState,
    action: TAction
): IProductState => {
    switch (action.type) {
        case EPActionsTypes.FETCH_PRODUCTS_INIT:
            return { data: [], loading: true, error: null };
        case EPActionsTypes.FETCH_PRODUCTS_SUCCESS:
            return { data: action.payload, loading: false, error: null };
            break;
        case EPActionsTypes.FETCH_PRODUCTS_ERROR:
            return { data: [], loading: false, error: action.payload };
        case EPActionsTypes.FETCH_PRODUCTS_SEARCH:
            return { data: [], loading: false, error: null };
        default:
            return state;
    }
};
export default reducer;
