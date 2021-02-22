import React, { useState } from "react";
import { useActions } from "../../../hooks/useAction";

interface IQuery {
    text: string;
    active: string;
    promo: string;
}
enum ECheckBox {
    ACTIVE = "&active=",
    PROMO = "&promo=",
    TEXT = "?search=",
    LIMIT = "?limit=8&page=1",
}

const SearchForm: React.FC = () => {
    const { fetchProducts } = useActions();
    const [{ text, active, promo }, setState] = useState({
        text: "",
        active: "",
        promo: "",
    });
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const currentValue = type === "checkbox" ? checked : value;

        setState((state) => ({
            ...state,
            [name]: currentValue,
        }));
    };
    const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        (text || promo || active) &&
            fetchProducts(
                ECheckBox.TEXT +
                    text +
                    ECheckBox.PROMO +
                    promo +
                    ECheckBox.ACTIVE +
                    active +
                    ECheckBox.LIMIT
            );
    };
    return (
        <form action="#" onSubmit={(e) => e}>
            <input
                type="text"
                name="text"
                value={text}
                className="input-text"
                onChange={onChangeValue}
            />
            <button type="submit" className="btn" onClick={onSubmit}>
                submit
            </button>
            <label htmlFor="active">
                <input type="checkbox" name="active" onChange={onChangeValue} />
                Active
            </label>
            <label htmlFor="promo">
                <input type="checkbox" name="promo" onChange={onChangeValue} />
                Promo
            </label>
        </form>
    );
};
export default SearchForm;
