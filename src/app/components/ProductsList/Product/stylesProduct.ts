import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // Styles for Product

        rootProduct: {
            position: "relative",
            height: "100%",
            minHeight: "400px",
            [theme.breakpoints.up("md")]: {
                maxWidth: "100%",
                minHeight: "342px",
                width: "100%",
            },
            [theme.breakpoints.up("lg")]: {
                minHeight: "400px",
            },

            display: "flex",
            flexDirection: "column",
            backgroundColor: "theme.palette.white.main",
            borderRadius: 8,
        },
        mediaProduct: {
            height: 0,
            paddingTop: "52%",
            [theme.breakpoints.up("lg")]: {
                paddingTop: "59%",
            },
        },

        blackAndWhiteProduct: {
            filter: "grayscale(100%)",
            opacity: "50%",
        },
        contentProduct: {
            padding: "10px 16px",
        },

        actionProduct: {
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "auto",
            padding: "8px 8px 26px",
            [theme.breakpoints.up("lg")]: {
                padding: "8px 8px 23px",
            },
        },
        boxProduct: {
            margin: "0 auto 9px",
            width: "94%",
            padding: 0,
            "& svg": {
                width: "16px",
                height: "16px",
                marginRight: "8px",
            },
        },
        badgeProduct: {
            position: "absolute",
            top: "15px",
            left: 0,
        },
        buttonProduct: {
            width: "94%",
            margin: "0 auto !important",
            textTransform: "none",
            boxShadow: "none",
            "&:disabled": {
                background: "theme.palette.textColor.light",
            },
        },
    })
);
