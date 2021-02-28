import { Dispatch } from "redux";
import { EAActionsTypes } from "../../action-types";
import { TAction } from "../../actions/index";
import { ILoginData } from "../../../app-models/app.models";

export const setLogIn = (data: ILoginData) => (dispatch: Dispatch<TAction>) => {
    dispatch({
        type: EAActionsTypes.LOG_IN,
        payload: data,
    });
};
