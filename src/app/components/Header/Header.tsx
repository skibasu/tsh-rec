import React from "react";
import PageLogo from "../PageLogo/PageLogo";
import SearchForm from "../SearchForm/SearchForm";
import CurrentUser from "../CurrentUser/CurrentUser";

const Header: React.FC = () => {
    return (
        <header>
            <PageLogo />
            <SearchForm />
            <CurrentUser />
        </header>
    );
};

export default Header;
