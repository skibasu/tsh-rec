import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { ReactComponent as FolderIcon } from "../Icons/icon-folder.svg";

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
            marginBottom: 22,
        },
        title: {
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "16px",
            marginBottom: 8,
        },
        subtitle: {
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "16px",
            color: "#9194A5",
        },
    })
);

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
