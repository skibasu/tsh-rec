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
    })
);
