import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            height: 36,
            padding: 0,
            margin: 0,
            [theme.breakpoints.up("lg")]: {
                height: 72,
            },
        },
        elem: {
            margin: "0 2px",
            display: "inline-flex",
        },
        elemDot: {
            margin: "0 10px",
            display: "inline-flex",
        },
        link: {
            display: "block",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: 1,
            color: "#1A1B1D",
            textDecoration: "none",
            padding: 6,
            [theme.breakpoints.up("lg")]: {
                padding: 6,
            },
        },
        button: {
            display: "inline-flex",
            textDecoration: "none",
            color: "#1A1B1D",
            fontWeight: 600,
            padding: 6,
            fontSize: "14px",
            lineHeight: 1,
            "&:first-child": {
                marginLeft: 5,
                [theme.breakpoints.up("lg")]: { marginLeft: 15 },
            },
            "&:last-child": {
                marginRight: 5,
                [theme.breakpoints.up("lg")]: { marginRight: 15 },
            },
            [theme.breakpoints.up("lg")]: {},
        },
        notActive: {
            color: "#9194A5",
            cursor: "auto",
        },
        current: {
            color: theme.palette.primary.main,
            cursor: "auto",
        },
    })
);
