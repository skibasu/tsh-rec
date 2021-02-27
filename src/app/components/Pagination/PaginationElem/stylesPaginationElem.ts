import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        elem: {
            margin: "0 2px",
            display: "inline-flex",
        },

        link: {
            display: "block",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: 1,
            color: theme.palette.textColor.main,
            textDecoration: "none",
            padding: 6,
            height: "auto",
            minWidth: "unset",
            [theme.breakpoints.up("lg")]: {
                padding: 6,
            },
            "&:disabled": {
                color: theme.palette.primary.main,
            },
        },
    })
);
