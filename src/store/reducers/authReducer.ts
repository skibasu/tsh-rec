import { EAActionsTypes } from "../action-types/index";
import { TAction } from "../actions/index";
import { ILoginData } from "../../app-models/app.models";

const initialState = {
    username: "",
    password: "",
    isLogin: false,
};

const reducer = (
    state: ILoginData = initialState,
    action: TAction
): ILoginData => {
    switch (action.type) {
        case EAActionsTypes.LOG_IN:
            return action.payload;
        default:
            return state;
    }
};
export default reducer;
