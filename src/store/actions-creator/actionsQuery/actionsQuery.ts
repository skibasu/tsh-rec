import { Dispatch } from "redux";
import { EQActionsTypes } from "../../action-types";
import { TAction, IQueryParams } from "../../actions/index";

export const setQuery = (query: IQueryParams) => (
    dispatch: Dispatch<TAction>
) => {
    dispatch({
        type: EQActionsTypes.SET_QUERY,
        payload: query,
    });
};
