import { TAction } from "../actions/index";
import { EQActionsTypes } from "../action-types/index";

interface IQueryState {
    search?: string | null | undefined;
    active?: string | boolean | undefined;
    promo?: string | boolean | undefined;
    limit?: number | null | undefined | boolean;
}
const initialState = {
    limit: 8,
};

const reducer = (
    state: IQueryState = initialState,
    action: TAction
): IQueryState => {
    switch (action.type) {
        case EQActionsTypes.SET_QUERY:
            return action.payload;
        default:
            return state;
    }
};
export default reducer;
