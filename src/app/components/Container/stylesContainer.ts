import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: "relative",
            paddingRight: 24,
            paddingLeft: 24,
            marginRight: "auto",
            marginLeft: "auto",
            width: "100%",
            [theme.breakpoints.up("md")]: {
                maxWidth: "90%",
            },
            [theme.breakpoints.up("lg")]: {
                paddingRight: 15,
                paddingLeft: 15,
                maxWidth: 960,
            },
            [theme.breakpoints.up("xl")]: {
                maxWidth: 1140,
            },
            [theme.breakpoints.up("xxl")]: {
                maxWidth: 1252,
            },
        },
    })
);
