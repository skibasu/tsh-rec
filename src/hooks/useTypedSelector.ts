import { useSelector, TypedUseSelectorHook } from "react-redux";
import { IProductState } from "../store/reducers/productsReducer";

export const useTypedSelector: TypedUseSelectorHook<IProductState> = useSelector;
