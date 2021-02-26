import React, { useState } from "react";
import clsx from "clsx";
import { useActions } from "../../../hooks/useAction";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
    Checkbox,
    FormControlLabel,
    InputBase,
    Box,
    IconButton,
} from "@material-ui/core";
import { ReactComponent as SearchIcon } from "../Icons/search.svg";

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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            order: 4,
            width: "100%",
            padding: "23px 0 0",
            [theme.breakpoints.up("lg")]: {
                padding: 0,
                width: "auto",
                order: "unset",
                flex: "1 1 auto",
                marginLeft: "105px",
            },
        },
        form: {
            [theme.breakpoints.up("lg")]: {
                alignItems: "center",
                display: "flex",
            },
        },
        searchWrapper: {
            position: "relative",
            width: "100%",
            height: "48px",
            marginBottom: "15px",
            [theme.breakpoints.up("lg")]: {
                width: "392px",
                marginBottom: 0,
            },
        },
        checkboxWrapper: {
            [theme.breakpoints.up("lg")]: {
                marginLeft: "23px",
            },
        },
        input: {
            height: "48px",
            //TODO COLORS
            border: "1px solid #E0E2EA",
            borderRadius: 8,
            padding: "10px 56px 10px 15px",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "16px",
        },
        searchSubmit: {
            position: "absolute",
            width: "48px",
            height: "48px",
            top: 0,
            right: 0,
        },
        checkbox: {
            marginRight: "35px",
            "&:last-child": {
                marginRight: 0,
            },
            [theme.breakpoints.up("lg")]: {
                marginRight: "35px",
            },
        },

        icon: {
            borderRadius: 4,
            width: 24,
            height: 24,

            background: "#FFFFFF",
            border: "1px solid #E0E2EA",
            "input:hover ~ &": {
                backgroundColor: "#ebf1f5",
            },
            "input:disabled ~ &": {
                boxShadow: "none",
                background: "rgba(206,217,224,.5)",
            },
        },
        checkedIcon: {
            backgroundColor: "#137cbd",
            backgroundImage:
                "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
            "&:before": {
                display: "block",
                width: 24,
                height: 24,
                backgroundImage:
                    "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzQ0NjBGNyIvPgo8cGF0aCBkPSJNMTAuMDAwMSAxNC43Nzk5TDcuMjIwMSAxMS45OTk5TDYuMjczNDQgMTIuOTM5OUwxMC4wMDAxIDE2LjY2NjZMMTguMDAwMSA4LjY2NjU2TDE3LjA2MDEgNy43MjY1NkwxMC4wMDAxIDE0Ljc3OTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)",
                content: '""',
            },
            "input:hover ~ &": {
                backgroundColor: "#106ba3",
            },
        },
    })
);

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
