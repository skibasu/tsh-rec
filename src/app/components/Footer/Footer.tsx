import React from "react";
import { Box } from "@material-ui/core";
import MyContainer from "../Container/Container";
import MyPagination from "../Pagination/Pagination";
import { useStyles } from "./stylesFooter";

const Footer: React.FC = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <MyContainer>
                <Box className={classes.row}>
                    <MyPagination />
                </Box>
            </MyContainer>
        </footer>
    );
};
export default Footer;
