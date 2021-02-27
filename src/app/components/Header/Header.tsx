import React from "react";
import PageLogo from "../PageLogo/PageLogo";
import SearchForm from "../SearchForm/SearchForm";
import CurrentUser from "../CurrentUser/CurrentUser";
import { Box } from "@material-ui/core";
import MyContainer from "../Container/Container";
import { useStyles } from "./stylesHeader";

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
