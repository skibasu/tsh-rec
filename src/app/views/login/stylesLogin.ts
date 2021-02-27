import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import background from "../../assetes/images/login.jpg";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            height: "100vh",
        },
        row: {
            display: "flex",
            height: "100%",
        },

        leftColumn: {
            display: "none",
            [theme.breakpoints.up("md")]: {
                display: "block",
                flex: "0 0 42%",
                width: "100%",
                maxWidth: "42%",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            },
        },
        rightColumn: {
            flex: "0 0 100%",

            width: "100%",
            padding: "54px 24px",
            [theme.breakpoints.up("md")]: {
                display: "flex",
                flexDirection: "column",
                flex: "0 0 58%",
                maxWidth: "58%",
                padding: "50px 24px 50px 24px",
            },
            [theme.breakpoints.up("xl")]: {
                padding: "62px 40px 79px 128px",
            },
        },
        rowY: {
            flex: "1 1 auto",
            display: "flex",
            alignItems: "center",
        },
        header: {
            maxWidth: 496,
            margin: "0 auto",
            marginBottom: 100,

            [theme.breakpoints.up("md")]: {
                margin: 0,
                maxWidth: "100%",
                width: "100%",
            },
        },
        form: {
            flex: "1 1 auto",
            margin: "0 auto",
            maxWidth: 496,
            [theme.breakpoints.up("md")]: {
                margin: 0,
            },
        },
        inputWrapper: {
            marginBottom: 22,
        },
        inputWrapperLast: {
            marginBottom: 56,
        },
        label: {
            display: "block",
            marginBottom: 8,
            fontWight: 600,
            fontSize: 14,
            lineHeight: "16px",
        },
        input: {
            height: "48px",
            //TODO COLORS
            border: "1px solid #E0E2EA",
            borderRadius: 8,
            padding: "10px 56px 10px 15px",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "16px",
        },

        button: {
            textTransform: "none",
            boxShadow: "none",
            marginBottom: 10,
            height: 48,
        },
        link: {
            position: "relative",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "16px",
            color: "#9194A5",
            textDecoration: "none",
            "&::after": {
                content: '""',
                display: "block",
                position: "absolute",
                width: "100%",
                height: "1px",
                left: 0,
                bottom: 1,
                backgroundColor: "#9194A5",
            },
        },
    })
);
