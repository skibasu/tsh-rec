import { Dispatch } from "redux";
import { EAActionsTypes } from "../../action-types";
import { TAction } from "../../actions/index";
import { ILoginData } from "../../../app-models/app.models";

export const setLogIn = (payload: ILoginData) => async (
    dispatch: Dispatch<TAction>
) => {
    // Request
    dispatch({
        type: EAActionsTypes.LOG_IN,
        payload: { ...payload, token: "token" },
    });
};

export const setLogOut = () => async (dispatch: Dispatch<TAction>) => {
    // Request
    dispatch({
        type: EAActionsTypes.LOG_IN,
        payload: { username: "", password: "", token: "" },
    });
};
