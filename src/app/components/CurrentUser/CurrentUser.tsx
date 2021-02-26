import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Avatar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
        },
        avatar: {
            width: "48px",
            height: "48px",
        },
        logoutWrapper: {
            paddingTop: 20,
            position: "absolute",
            right: 0,
            bottom: "-133%",
            width: "184px",
        },
        logout: {
            display: "flex",
            alignItems: "center",
            height: "56px",
            padding: "15px 17px",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "16px",
            background: "#fff",
            opacity: 1,
            boxShadow: "0px 8px 32px rgba(17, 18, 20, 0.158514)",
            borderRadius: 4,
            "& >a": {
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: 1,
                color: "#1A1B1D;",
                textDecoration: "none",
            },
        },
        login: {
            width: 88,
            height: 38,
            margin: "0 auto !important",
            textTransform: "none",
            border: `1px solid ${theme.palette.primary.main}`,
        },
    })
);

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
