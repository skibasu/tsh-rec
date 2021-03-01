import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "5px 10px",
            backgroundColor: theme.palette.warning.main,
            width: 75,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.white.main,
            fontWight: 600,
            fontSize: 14,
            lineHeight: 1,
        },
    })
);
