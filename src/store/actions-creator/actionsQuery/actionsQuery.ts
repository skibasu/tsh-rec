import { Dispatch } from "redux";
import { EQActionsTypes } from "../../action-types";
import { TAction } from "../../actions/index";
import { IQueryParams } from "../../../app-models/app.models";

export const setQuery = (query: IQueryParams) => (
    dispatch: Dispatch<TAction>
) => {
    dispatch({
        type: EQActionsTypes.SET_QUERY,
        payload: query,
    });
};
