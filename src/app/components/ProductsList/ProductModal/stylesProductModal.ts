import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // Styles for Moadal

        modal: {
            background: "rgba(26, 27, 29, 0.9)",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            outline: "none",

            overflow: "auto",
            height: "100%",
            minHeight: 570,
        },
        paperModal: {
            position: "relative",
            width: "87%",
            minHeight: 570,
            maxWidth: 600,
            background: theme.palette.white.main,
            boxShadow: "0px 8px 32px rgba(17, 18, 20, 0.158514)",
            borderRadius: 8,
            outline: "none",
            "&:focus": {
                outline: "none",
            },
            [theme.breakpoints.up("lg")]: {
                minWidth: 600,
                minHeight: 530,
            },
        },
        media1Modal: {
            height: 0,
            paddingTop: "109.3%",
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            [theme.breakpoints.up("lg")]: {
                paddingTop: "59%",
            },
        },
        content1Modal: {
            padding: "24px",
            [theme.breakpoints.up("lg")]: {
                padding: "24px 34px",
            },
        },
        subtitle1Modal: {
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "24px",
        },
        closeModal: {
            position: "absolute",
            zIndex: 2,
            width: 38,
            height: 38,
            top: 15,
            right: 15,
        },
    })
);
