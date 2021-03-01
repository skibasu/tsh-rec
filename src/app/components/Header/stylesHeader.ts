import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            zIndex: 100,
            backgroundColor: theme.palette.white.main,
            padding: "50px 0 22px",
            [theme.breakpoints.up("lg")]: {
                padding: "50px 0 47px",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
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
