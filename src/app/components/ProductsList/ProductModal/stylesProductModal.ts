import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            maxWidth: "100%",
            borderRadius: 8,
            background: "rgba(26, 27, 29, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
            overflow: "auto",
            height: "100%",
            "& .MuiPaper-rounded ": {
                borderRadius: 10,
                maxWidth: "100%",
                [theme.breakpoints.down("md")]: {
                    maxWidth: "100%",
                },
            },
            "& .MuiDialog-paperWidthFals": {
                [theme.breakpoints.down("md")]: {
                    [theme.breakpoints.down("md")]: {
                        maxWidth: "100%",
                    },
                },
            },
            "& .MuiDialog-paper": {
                margin: 24,
            },
        },
        paperModal: {
            overflo: "hidden",
            position: "relative",
            minHeight: 570,
            maxWidth: 600,
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
