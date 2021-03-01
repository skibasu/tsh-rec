import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        elemDot: {
            margin: "0 10px",
            display: "inline-flex",
        },
        elemDotBefore: {
            float: "left",
        },
    })
);
