import { TAction } from "../actions/index";
import { EPActionsTypes } from "../action-types";

export interface IItems {
    [key: string]: string | number | boolean | null;
}
export interface ILinks {
    [key: string]: string | number;
}
export interface IData {
    items: IItems[];
    links: ILinks;
}
export interface IProductState {
    data: any;
    loading: boolean;
    error: string | null;
    firstLoad: boolean;
}
const initialState = {
    data: {
        items: [],
        links: {
            first: "",
            last: "",
            next: "",
            previous: "",
        },
        meta: {
            totalItems: 0,
            itemCount: 0,
            itemsPerPage: 0,
            totalPages: 0,
            currentPage: 0,
        },
    },
    loading: false,
    error: null,
    firstLoad: false,
};

const reducer = (
    state: IProductState = initialState,
    action: TAction
): IProductState => {
    switch (action.type) {
        case EPActionsTypes.FETCH_PRODUCTS_INIT:
            return {
                data: initialState,
                loading: true,
                error: null,
                firstLoad: false,
            };
        case EPActionsTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                data: action.payload,
                loading: false,
                error: null,
                firstLoad: true,
            };
        case EPActionsTypes.FETCH_PRODUCTS_ERROR:
            return {
                data: initialState,
                loading: false,
                error: action.payload,
                firstLoad: false,
            };

        default:
            return state;
    }
};
export default reducer;
