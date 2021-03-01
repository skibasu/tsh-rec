import React from "react";
import ReactDOM from "react-dom";
import { AppProviders } from "providers/AppProviders";
import { App } from "./app/App";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./stylesIndex";
import { ThemeProvider } from "@material-ui/core/styles";

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
