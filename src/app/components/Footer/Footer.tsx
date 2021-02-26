import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import MyContainer from "../Container/Container";
import MyPagination from "../Pagination/MyPagination";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        footer: {
            backgroundColor: "#f2f2f2",
            paddingBottom: 56,
            [theme.breakpoints.up("lg")]: {
                paddingBottom: 28,
            },
        },
        row: {
            display: "flex",
            justifyContent: "center",
        },
    })
);
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
