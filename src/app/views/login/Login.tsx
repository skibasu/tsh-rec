import React, { useState } from "react";
import clsx from "clsx";
import { useActions } from "../../../hooks/useAction";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import { useHistory } from "react-router-dom";
import { Typography, Box, Button, InputBase } from "@material-ui/core";
import PageLogo from "../../components/PageLogo/PageLogo";
import { useStyles } from "./stylesLogin";
import { ILoginData } from "app-models/app.models";

export const Login = () => {
    const s = useSelector((state: any) => state);

    const classes = useStyles();
    const history = useHistory();
    const { setLogIn } = useActions();
    const [state, setState] = useState<ILoginData>({
        username: "",
        password: "",
        isLogin: true,
    });

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setState((state) => ({ ...state, [target.name]: target.value }));
    };
    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLogIn(state);
        console.log("login ", s.login.isLogin);
    };
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.row}>
                    <Box className={classes.leftColumn}></Box>
                    <Box className={classes.rightColumn}>
                        <Box component="header" className={classes.header}>
                            <PageLogo />
                        </Box>
                        <Box className={classes.rowY}>
                            <form className={classes.form}>
                                <Typography variant="h2" component="h2">
                                    Login
                                </Typography>
                                <Box className={classes.inputWrapper}>
                                    <label
                                        htmlFor="login"
                                        className={classes.label}
                                    >
                                        Username
                                    </label>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Enter username"
                                        value={state.username}
                                        fullWidth={true}
                                        onChange={onChangeValue}
                                        type="text"
                                        name="username"
                                    />
                                </Box>
                                <Box
                                    className={clsx(
                                        classes.inputWrapper,
                                        classes.inputWrapperLast
                                    )}
                                >
                                    <label
                                        htmlFor="password"
                                        className={classes.label}
                                    >
                                        Password
                                    </label>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Enter password"
                                        value={state.password}
                                        fullWidth={true}
                                        onChange={onChangeValue}
                                        type="password"
                                        name="password"
                                    />
                                </Box>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth={true}
                                    className={classes.button}
                                    onClick={onLogin}
                                >
                                    Log in
                                </Button>
                                <Button className={classes.link}>
                                    Forgot password?
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {false && <Redirect to={AppRoute.LOGIN} />}
        </>
    );
};
