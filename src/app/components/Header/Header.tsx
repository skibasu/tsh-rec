import React from "react";
import PageLogo from "../PageLogo/PageLogo";
import SearchForm from "../SearchForm/SearchForm";
import CurrentUser from "../CurrentUser/CurrentUser";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import MyContainer from "../Container/Container";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            padding: "50px 0 22px",
            [theme.breakpoints.up("lg")]: {
                padding: "50px 0 47px",
            },
        },
        row: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
        },
    })
);

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <MyContainer>
                <Box className={classes.row}>
                    <PageLogo />
                    <SearchForm />
                    <CurrentUser />
                </Box>
            </MyContainer>
        </header>
    );
};

export default Header;
