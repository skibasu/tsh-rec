import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import { ReactComponent as Logo } from "../Icons/page-logo.svg";

const PageLogo: React.FC = () => {
    return (
        <>
            <Link to={AppRoute.HOME}>
                <Logo />
            </Link>
        </>
    );
};

export default PageLogo;
