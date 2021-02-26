import { TAction } from "../actions/index";
import { EQActionsTypes } from "../action-types/index";

interface IQueryState {
    query: string;
}
const initialState = {
    query: "?limit=8&page=",
};

const reducer = (
    state: IQueryState = initialState,
    action: TAction
): IQueryState => {
    switch (action.type) {
        case EQActionsTypes.SET_QUERY:
            return { query: action.payload };
        default:
            return state;
    }
};
export default reducer;
