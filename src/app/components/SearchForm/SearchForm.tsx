import React, { useState } from "react";
import clsx from "clsx";
import { isMobileOnly } from "react-device-detect";
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
    limit?: number;
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
        !isMobileOnly &&
            (search || promo || active) &&
            fetchProducts({
                search,
                active,
                promo,
                limit: 8,
                page: 1,
            });
        isMobileOnly &&
            (search || promo || active) &&
            fetchProducts({
                search,
                active,
                promo,
                limit: 4,
                page: 1,
            });

        !isMobileOnly &&
            (search || promo || active) &&
            setQuery({ search, active, promo, limit: 8 });
        isMobileOnly &&
            (search || promo || active) &&
            setQuery({ search, active, promo, limit: 4 });
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
