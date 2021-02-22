import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCreator from "../store/index";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionsCreator, dispatch);
};
