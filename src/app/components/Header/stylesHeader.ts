import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            padding: "50px 0 22px",
            [theme.breakpoints.up("lg")]: {
                padding: "50px 0 47px",
            },
        },
        row: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
        },
    })
);
