import React from "react";
import { Box, Typography } from "@material-ui/core";
import { ReactComponent as FolderIcon } from "../Icons/icon-folder.svg";
import { useStyles } from "./stylesNothingFound";

const NothingFound: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.body}>
                <Box className={classes.content}>
                    <FolderIcon className={classes.svg} />
                    <Typography
                        variant="h4"
                        component="h2"
                        className={classes.title}
                    >
                        Ooops… It’s empty here
                    </Typography>
                    <Typography component="p" className={classes.subtitle}>
                        There are no products on the list
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
export default NothingFound;
