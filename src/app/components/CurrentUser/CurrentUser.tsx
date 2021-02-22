import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import Avatar from "../Avatar/Avatar";

const CurrentUser: React.FC = () => {
    return (
        <div className="root">
            <Avatar />
            <Link to={AppRoute.login}>Logout</Link>
        </div>
    );
};

export default CurrentUser;
