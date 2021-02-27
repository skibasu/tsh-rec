import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            backgroundColor: "#f2f2f2",
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
