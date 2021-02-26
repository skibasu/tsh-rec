import React from "react";
import ReactDOM from "react-dom";
import { AppProviders } from "providers/AppProviders";
import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
// TODO
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createBreakpoints" {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}
const blue = {
    main: "#4460f7",
    dark: "#2140e8",
    contrastText: "#ffffff",
};
const gold = {
    main: "#F9A52B",
};
const gray = {
    light: "#F0F1F5",
    main: "#B9BDCF",
    dark: "#2140e8",
};
const text = {
    light: "#9194A5",
    main: "#1A1B1D",
    dark: "#000000",
};
const fontFamily = "Nunito, sans-serif";
const fontSize = 18;
const h2 = {
    fontFamily,
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "40px",
    margin: "0 0  27px 0",
};
const h3 = {
    fontFamily,
    fontSize: 24,
    lineHeight: "40px",
    fontWeight: 600,
    margin: "0 0  8px 0",
};
const h4 = {
    fontFamily,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 1.5,
    margin: "0 0  8px 0",
};
const body1 = {
    fontSize: 14,
    lineHeight: "16px",
    color: "#9194A5",
    fontWeight: 600,
};
const button = {
    height: 38,
    fontSize: 14,
    fontWeight: 600,
};

const theme = createMuiTheme({
    palette: {
        primary: blue,
        warning: gold,
        action: {
            disabledBackground: "#9194A5",
            disabled: "#ffffff",
        },
    },

    typography: { fontFamily, fontSize, h2, h3, h4, body1, button },
    spacing: 12,
    breakpoints: {
        values: {
            xs: 0,
            sm: 580,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1366,
        },
    },
});

ReactDOM.render(
    <AppProviders>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </AppProviders>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
