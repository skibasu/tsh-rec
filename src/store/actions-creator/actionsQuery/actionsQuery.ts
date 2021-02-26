import { Dispatch } from "redux";
import { EQActionsTypes } from "../../action-types";
import { TAction } from "../../actions/index";

export const setQuery = (query: string) => (dispatch: Dispatch<TAction>) => {
    dispatch({
        type: EQActionsTypes.SET_QUERY,
        payload: query,
    });
};
