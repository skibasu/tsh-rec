import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            backgroundColor: theme.palette.white.dark,
            paddingBottom: 56,
            [theme.breakpoints.up("lg")]: {
                paddingBottom: 28,
            },
        },
        row: {
            display: "flex",
            justifyContent: "center",
        },
    })
);
