import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";

const Header: React.FC = () => {
    return (
        <header>
            <Link to={AppRoute.login}> Login </Link>
        </header>
    );
};

export default Header;
