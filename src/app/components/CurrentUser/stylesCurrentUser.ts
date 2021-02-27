import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
        },
        avatar: {
            width: "48px",
            height: "48px",
        },
        logoutWrapper: {
            paddingTop: 20,
            position: "absolute",
            right: 0,
            bottom: "-133%",
            width: "184px",
        },
        logout: {
            display: "flex",
            alignItems: "center",
            height: "56px",
            padding: "15px 17px",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "16px",
            background: "#fff",
            opacity: 1,
            boxShadow: "0px 8px 32px rgba(17, 18, 20, 0.158514)",
            borderRadius: 4,
            "& >a": {
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: 1,
                color: "#1A1B1D;",
                textDecoration: "none",
            },
        },
        login: {
            width: 88,
            height: 38,
            margin: "0 auto !important",
            textTransform: "none",
            border: `1px solid ${theme.palette.primary.main}`,
        },
    })
);
