import React, { useState } from "react";
import clsx from "clsx";
import OutsideClickHandler from "react-outside-click-handler";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useAction";
import { useHistory } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import { Box, Avatar, Button } from "@material-ui/core";
import { useStyles } from "./stylesCurrentUser";

const CurrentUser: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const state = useSelector((state: any) => state);
    const { setLogOut } = useActions();
    const { token } = state.login;
    const [popup, setPopUpVisible] = useState<boolean>(false);
    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        history.push(AppRoute.LOGIN);
    };
    const onLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLogOut();
    };

    return (
        <Box className={classes.root}>
            {token && (
                <>
                    {" "}
                    <OutsideClickHandler
                        onOutsideClick={() => setPopUpVisible(false)}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src="https://i.pravatar.cc/48"
                            className={classes.avatar}
                            onClick={() => setPopUpVisible(!popup)}
                        />

                        <Box
                            className={
                                popup
                                    ? clsx(
                                          classes.logoutWrapper,
                                          classes.logoutWrapperActive
                                      )
                                    : clsx(classes.logoutWrapper)
                            }
                        >
                            <Box className={classes.logout}>
                                <Button
                                    onClick={onLogout}
                                    className={classes.logoutButon}
                                >
                                    Logout
                                </Button>
                            </Box>
                        </Box>
                    </OutsideClickHandler>
                </>
            )}
            {!token && (
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
