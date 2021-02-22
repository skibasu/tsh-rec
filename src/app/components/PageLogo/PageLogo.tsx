import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import Logo from "../../assetes/svg/join.tsh.io.svg";

const PageLogo: React.FC = () => {
    return (
        <>
            <Link to={AppRoute.home}>
                {/* TODO INLINE SVGS */}
                <img src={Logo} alt="logo" />
            </Link>
        </>
    );
};

export default PageLogo;
