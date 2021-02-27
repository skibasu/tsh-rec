import { EQActionsTypes } from "../action-types/index";
import { TAction, IQueryParams } from "../actions/index";

const initialState = {
    limit: 8,
};

const reducer = (
    state: IQueryParams = initialState,
    action: TAction
): IQueryParams => {
    switch (action.type) {
        case EQActionsTypes.SET_QUERY:
            return action.payload;
        default:
            return state;
    }
};
export default reducer;
