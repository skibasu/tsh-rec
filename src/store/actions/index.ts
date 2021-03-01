import {
    EPActionsTypes,
    EQActionsTypes,
    EAActionsTypes,
} from "../action-types/index";
import {
    IProduct,
    IQueryParams,
    ILoginData,
} from "../../app-models/app.models";

export interface IFetchInit {
    type: EPActionsTypes.FETCH_PRODUCTS_INIT;
}

export interface IFetchSuccess {
    type: EPActionsTypes.FETCH_PRODUCTS_SUCCESS;
    payload: IProduct[];
}

export interface IFetchError {
    type: EPActionsTypes.FETCH_PRODUCTS_ERROR;
    payload: string | null;
}

export interface ISetQuery {
    type: EQActionsTypes.SET_QUERY;
    payload: IQueryParams;
}

export interface ISetLogIn {
    type: EAActionsTypes.LOG_IN;
    payload: ILoginData;
}
export interface ISetLogOut {
    type: EAActionsTypes.LOG_OUT;
    payload: ILoginData;
}

/**  TAction - all products actions types */
export type TAction =
    | IFetchInit
    | IFetchSuccess
    | IFetchError
    | ISetQuery
    | ISetLogIn
    | ISetLogOut;
