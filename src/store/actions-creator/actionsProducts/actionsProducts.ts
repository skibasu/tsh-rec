import axios from "axios";
import { Dispatch } from "redux";
import { EPActionsTypes } from "../../action-types";
import { TAction, IQueryParams } from "../../actions/index";

export const fetchProducts = (params: IQueryParams) => async (
    dispatch: Dispatch<TAction>
) => {
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
