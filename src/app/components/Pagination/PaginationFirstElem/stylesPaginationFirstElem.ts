import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        elem: {
            margin: "0 20px 0 2px",
            display: "inline-flex",
            [theme.breakpoints.up("lg")]: { margin: "0 2px" },
        },

        button: {
            minWidth: "unset",
            height: "auto",
            textTransform: "none",
            display: "inline-flex",
            textDecoration: "none",
            color: theme.palette.textColor.main,
            fontWeight: 600,
            padding: 6,
            fontSize: 14,
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
                color: theme.palette.textColor.light,
            },
        },
    })
);
