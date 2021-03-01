import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ReactComponent as ErrorIcon } from "../Icons/error.svg";
import { useStyles } from "./stylesError";

const Error: React.FC<{ error: string }> = ({ error }) => {
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
export default Error;
