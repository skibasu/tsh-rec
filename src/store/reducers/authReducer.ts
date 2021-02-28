import { EAActionsTypes } from "../action-types/index";
import { TAction } from "../actions/index";
import { ILoginData } from "../../app-models/app.models";

const initialState = {
    username: "",
    password: "",
    token: "",
};

const reducer = (
    state: ILoginData = initialState,
    action: TAction
): ILoginData => {
    switch (action.type) {
        case EAActionsTypes.LOG_IN:
            return action.payload;
        case EAActionsTypes.LOG_OUT:
            return action.payload;
        default:
            return state;
    }
};
export default reducer;
