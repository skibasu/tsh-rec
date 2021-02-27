import React, { useState } from "react";
import clsx from "clsx";
import { AppRoute } from "routing/AppRoute.enum";
import { useHistory } from "react-router-dom";
import { Typography, Box, Button, InputBase } from "@material-ui/core";
import PageLogo from "../../components/PageLogo/PageLogo";
import { useStyles } from "./stylesLogin";
interface IAuth {
    isLogin: boolean;
    username: string | null;
    password: string | null;
}

export const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = useState<IAuth>({
        isLogin: false,
        username: "",
        password: "",
    });

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setState((state) => ({ ...state, [target.name]: target.value }));
    };
    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setState((state) => ({ ...state, isLogin: true }));
        history.push(AppRoute.HOME);
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
                                        name="login"
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
        </>
    );
};
