import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            padding: "56px 0 56px",
        },
        body: {
            maxWidth: 600,
            minHeight: 344,
            background: theme.palette.white.main,
            borderRadius: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
        },
        content: {
            textAlign: "center",
        },
        svg: {
            display: "block",
            margin: "0 auto",
            marginBottom: 25,
            width: 72,
            height: 58,
        },
        title: {
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "16px",
            marginBottom: 16,
        },
        subtitle: {
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "16px",
            color: theme.palette.secondary.dark,
        },
    })
);
