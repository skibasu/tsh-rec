import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { ReactComponent as ErrorIcon } from "../Icons/error.svg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            padding: "56px 0 56px",
        },
        body: {
            maxWidth: 600,
            minHeight: 344,
            background: "#FFFFFF",
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
            color: "red",
        },
    })
);

const NothingFound: React.FC<{ error: string }> = ({ error }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.body}>
                <Box className={classes.content}>
                    <ErrorIcon className={classes.svg} />
                    <Typography
                        variant="h4"
                        component="h2"
                        className={classes.title}
                    >
                        Oops, something went wrong!
                    </Typography>
                    <Typography component="p" className={classes.subtitle}>
                        {error}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
export default NothingFound;
