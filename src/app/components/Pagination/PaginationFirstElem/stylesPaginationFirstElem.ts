import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        elem: {
            margin: "0 2px",
            display: "inline-flex",
        },

        button: {
            minWidth: "unset",
            height: "auto",
            textTransform: "none",
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
            "&:disabled": {
                color: "#9194A5",
            },
        },
    })
);
