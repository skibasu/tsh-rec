import axios from "../../../axios/index";
import { Dispatch } from "redux";
import { EPActionsTypes } from "../../action-types";
import { TAction } from "../../actions/index";
import { IQueryParams } from "../../../app-models/app.models";

export const fetchProducts = (params: IQueryParams) => async (
    dispatch: Dispatch<TAction>
) => {
    dispatch({
        type: EPActionsTypes.FETCH_PRODUCTS_INIT,
    });
    try {
        const { data: payload } = await axios.get("products", {
            params: { ...params },
        });
        dispatch({
            type: EPActionsTypes.FETCH_PRODUCTS_SUCCESS,
            payload,
        });
    } catch (error) {
        dispatch({
            type: EPActionsTypes.FETCH_PRODUCTS_ERROR,
            payload: error.message,
        });
    }
};
