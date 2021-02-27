import { Dispatch } from "redux";
import { EQActionsTypes } from "../../action-types";
import { TAction } from "../../actions/index";
interface IQueryState {
    search?: string | null | undefined;
    active?: string | boolean | undefined;
    promo?: string | boolean | undefined;
    limit?: number | null | undefined | boolean;
    page?: number | null;
}
export const setQuery = (query: IQueryState) => (
    dispatch: Dispatch<TAction>
) => {
    dispatch({
        type: EQActionsTypes.SET_QUERY,
        payload: query,
    });
};
