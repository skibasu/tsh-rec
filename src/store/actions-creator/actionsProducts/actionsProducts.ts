import axios from "axios";
import { Dispatch } from "redux";
import { EPActionsTypes } from "../../action-types";
import { TAction } from "../../actions/index";

export const fetchProducts = (params: {
    search?: string | null | undefined;
    active?: string | null | undefined | boolean;
    promo?: string | null | undefined | boolean;
    limit?: number | null | undefined | boolean;
    page?: number;
}) => async (dispatch: Dispatch<TAction>) => {
    dispatch({
        type: EPActionsTypes.FETCH_PRODUCTS_INIT,
    });
    try {
        const { data: payload } = await axios.get(
            `https://join-tsh-api-staging.herokuapp.com/products`,
            {
                params: { ...params },
            }
        );
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
