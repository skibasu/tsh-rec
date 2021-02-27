import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "5px 10px",
            backgroundColor: theme.palette.warning.main,
            width: "75px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWight: 600,
            fontSize: "14px",
            lineHeight: 1,
        },
    })
);
