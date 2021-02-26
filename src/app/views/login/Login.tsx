import React, { useState } from "react";
import clsx from "clsx";
import { useActions } from "../../../hooks/useAction";
import { AppRoute } from "routing/AppRoute.enum";
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box, Button, InputBase } from "@material-ui/core";
import PageLogo from "../../components/PageLogo/PageLogo";
import background from "../../assetes/images/login.jpg";
interface IAuth {
    login: string | null;
    password: string | null;
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            height: "100vh",
        },
        row: {
            display: "flex",
            height: "100%",
        },

        leftColumn: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "block",
                flex: "0 0 42%",
                width: "100%",
                maxWidth: "42%",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            },
        },
        rightColumn: {
            flex: "0 0 100%",

            width: "100%",
            padding: "54px 24px",
            [theme.breakpoints.up("md")]: {
                display: "flex",
                flexDirection: "column",
                flex: "0 0 58%",
                maxWidth: "58%",
                padding: "50px 24px 50px 24px",
            },
            [theme.breakpoints.up("xl")]: {
                padding: "62px 40px 79px 128px",
            },
        },
        rowY: {
            flex: "1 1 auto",
            display: "flex",
            alignItems: "center",
        },
        header: {
            maxWidth: 496,
            margin: "0 auto",
            marginBottom: 100,

            [theme.breakpoints.up("md")]: {
                margin: 0,
                maxWidth: "100%",
                width: "100%",
            },
        },
        form: {
            flex: "1 1 auto",
            margin: "0 auto",
            maxWidth: 496,
            [theme.breakpoints.up("md")]: {
                margin: 0,
            },
        },
        inputWrapper: {
            marginBottom: 22,
        },
        inputWrapperLast: {
            marginBottom: 56,
        },
        label: {
            display: "block",
            marginBottom: 8,
            fontWight: 600,
            fontSize: 14,
            lineHeight: "16px",
        },
        input: {
            height: "48px",
            //TODO COLORS
            border: "1px solid #E0E2EA",
            borderRadius: 8,
            padding: "10px 56px 10px 15px",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "16px",
        },

        button: {
            textTransform: "none",
            boxShadow: "none",
            marginBottom: 10,
            height: 48,
        },
        link: {
            position: "relative",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "16px",
            color: "#9194A5",
            textDecoration: "none",
            "&::after": {
                content: '""',
                display: "block",
                position: "absolute",
                width: "100%",
                height: "1px",
                left: 0,
                bottom: 1,
                backgroundColor: "#9194A5",
            },
        },
    })
);

export const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = useState<IAuth>({ login: "", password: "" });

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        setState((state) => ({ ...state, [target.name]: target.value }));
    };
    const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        history.push(AppRoute.HOME);
    };
    return (
        <>
            {/* <Link to={AppRoute.HOME}>Products page</Link> */}
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
                                        value={state.login}
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
                                <a href="#" className={classes.link}>
                                    Forgot password?
                                </a>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
