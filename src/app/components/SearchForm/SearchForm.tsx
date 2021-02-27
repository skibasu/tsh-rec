import React, { useState } from "react";
import clsx from "clsx";
import { useActions } from "../../../hooks/useAction";
import {
    Checkbox,
    FormControlLabel,
    InputBase,
    Box,
    IconButton,
} from "@material-ui/core";
import { ReactComponent as SearchIcon } from "../Icons/search.svg";
import { useStyles } from "./stylesSearchForm";

interface IQuery {
    search: string;
    active: string | boolean;
    promo: string | boolean;
}
enum ECheckBox {
    ACTIVE = "&active=",
    PROMO = "&promo=",
    SEARCH = "?search=",
    LIMIT = "&limit=8",
    PAGE = "&page=",
}

const SearchForm: React.FC = () => {
    const classes = useStyles();
    const { fetchProducts, setQuery } = useActions();
    const [{ search, active, promo }, setState] = useState<IQuery>({
        search: "",
        active: "",
        promo: "",
    });
    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const currentValue = type === "checkbox" ? checked : value;

        setState((state) => ({
            ...state,
            [name]: currentValue || "",
        }));
    };
    const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        (search || promo || active) &&
            fetchProducts(
                ECheckBox.SEARCH +
                    search +
                    ECheckBox.LIMIT +
                    ECheckBox.PROMO +
                    promo +
                    ECheckBox.ACTIVE +
                    active +
                    ECheckBox.PAGE +
                    "1"
            );

        (search || promo || active) &&
            setQuery(
                ECheckBox.SEARCH +
                    search +
                    ECheckBox.LIMIT +
                    ECheckBox.PROMO +
                    promo +
                    ECheckBox.ACTIVE +
                    active +
                    ECheckBox.PAGE
            );
    };
    return (
        <Box className={classes.root}>
            <form className={classes.form} noValidate>
                <Box className={classes.searchWrapper}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search"
                        value={search}
                        fullWidth={true}
                        onChange={onChangeValue}
                        type="text"
                        name="search"
                    />
                    <IconButton
                        type="submit"
                        className={classes.searchSubmit}
                        aria-label="search"
                        onClick={onSubmit}
                    >
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Box className={classes.checkboxWrapper}>
                    <FormControlLabel
                        className={classes.checkbox}
                        control={
                            <Checkbox
                                onChange={onChangeValue}
                                name="active"
                                color="primary"
                                checkedIcon={
                                    <span
                                        className={clsx(
                                            classes.icon,
                                            classes.checkedIcon
                                        )}
                                    />
                                }
                                icon={<span className={classes.icon} />}
                            />
                        }
                        label="Active"
                    />

                    <FormControlLabel
                        className={classes.checkbox}
                        control={
                            <Checkbox
                                onChange={onChangeValue}
                                name="promo"
                                color="primary"
                                checkedIcon={
                                    <span
                                        className={clsx(
                                            classes.icon,
                                            classes.checkedIcon
                                        )}
                                    />
                                }
                                icon={<span className={classes.icon} />}
                            />
                        }
                        label="Promo"
                    />
                </Box>
            </form>
        </Box>
    );
};
export default SearchForm;
