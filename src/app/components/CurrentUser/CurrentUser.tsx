import React, { useState } from "react";
import clsx from "clsx";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useHistory } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import { Box, Avatar, Button } from "@material-ui/core";
import { useStyles } from "./stylesCurrentUser";
import { useSpring, animated } from "react-spring";

const CurrentUser: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const isLogin = true;
    const [popup, setPopUpVisible] = useState<boolean>(false);
    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        history.push(AppRoute.LOGIN);
    };
    const animation = useSpring({
        from: { transform: "translateY(3px)", opacity: 0 },

        to: {
            transform: popup ? "translateY(0)" : "translateY(3px)",
            opacity: popup ? 1 : 0,
        },
    });
    const AnimatedBox = animated(Box);

    return (
        <Box className={classes.root}>
            {isLogin && (
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

                        <AnimatedBox
                            className={clsx(classes.logoutWrapper)}
                            style={animation}
                        >
                            <Box className={classes.logout}>
                                <Link to={AppRoute.LOGIN}>Logout</Link>
                            </Box>
                        </AnimatedBox>
                    </OutsideClickHandler>
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
