import { EPActionsTypes, EQActionsTypes } from "../action-types/index";
import { IProduct } from "../../app-models/app.models";
/**  IFetchInit - initation response object interface */
export interface IFetchInit {
    type: EPActionsTypes.FETCH_PRODUCTS_INIT;
}

/**  IFetchSuccess  - success response object interface */
export interface IFetchSuccess {
    type: EPActionsTypes.FETCH_PRODUCTS_SUCCESS;
    payload: IProduct[];
}

/**  IFetchSuccess  - error response object interface */
export interface IFetchError {
    type: EPActionsTypes.FETCH_PRODUCTS_ERROR;
    payload: string | null;
}

/**  IFetchSuccess  - success response object interface */
export interface IFetchSearch {
    type: EPActionsTypes.FETCH_PRODUCTS_SEARCH;
    payload: IProduct[];
}

export interface IFetchSearchError {
    type: EPActionsTypes.FETCH_PRODUCTS_SEARCH_ERROR;
    payload: string | null;
}
export interface IQueryParams {
    search?: string | null | undefined;
    active?: string | null | undefined | boolean;
    promo?: string | null | undefined | boolean;
    limit?: number | null | undefined;
    page?: number;
}
export interface ISetQuery {
    type: EQActionsTypes.SET_QUERY;
    payload: IQueryParams;
}
/**  TAction - all products actions types */
export type TAction =
    | IFetchInit
    | IFetchSuccess
    | IFetchError
    | IFetchSearch
    | IFetchSearchError
    | ISetQuery;
