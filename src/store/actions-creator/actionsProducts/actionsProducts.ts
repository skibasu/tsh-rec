import axios from "axios";
import { Dispatch } from "redux";
import { EPActionsTypes } from "../../action-types";
import { TAction } from "../../actions/index";

export const fetchProducts = (query: string | null = null) => async (
    dispatch: Dispatch<TAction>
) => {
    dispatch({
        type: EPActionsTypes.FETCH_PRODUCTS_INIT,
    });
    try {
        const { data: payload } = await axios.get(
            `https://join-tsh-api-staging.herokuapp.com/products${query}`
        );
        console.log(payload);
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
