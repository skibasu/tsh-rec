import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import { Box, Avatar, Button } from "@material-ui/core";
import { useStyles } from "./stylesCurrentUser";

const CurrentUser: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const isLogin = false;
    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        history.push(AppRoute.LOGIN);
    };
    return (
        <Box className={classes.root}>
            {isLogin && (
                <>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://i.pravatar.cc/48"
                        className={classes.avatar}
                    />
                    <Box className={classes.logoutWrapper}>
                        <Box className={classes.logout}>
                            <Link to={AppRoute.LOGIN}>Logout</Link>
                        </Box>
                    </Box>
                </>
            )}
            {!isLogin && (
                <Button
                    variant="outlined"
                    color="primary"
                    className={classes.login}
                    onClick={onLogin}
                >
                    Log In
                </Button>
            )}
        </Box>
    );
};

export default CurrentUser;
