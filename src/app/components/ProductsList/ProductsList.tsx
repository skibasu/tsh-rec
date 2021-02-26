import React from "react";
import { useSelector } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Box } from "@material-ui/core";

import {
    createStyles,
    makeStyles,
    useTheme,
    Theme,
} from "@material-ui/core/styles";
import Product from "./Product/Product";
import MyContainer from "../Container/Container";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "24px 0 20px",
            [theme.breakpoints.up("lg")]: {
                padding: "55px 0 20px",
            },
        },
        column: {
            marginBottom: "12px",
            [theme.breakpoints.up("lg")]: {
                marginBottom: "8px",
            },
        },
        modal: {
            width: 600,
            height: 530,
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    })
);

const ProductsList: React.FC<any> = ({ data }) => {
    const classes = useStyles();
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box className={classes.root}>
            <div className="body">
                <MyContainer>
                    <>
                        <Grid container spacing={matches ? 2 : 1}>
                            {data.map((value: any) => (
                                <Grid
                                    key={value.id}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    xl={3}
                                    className={classes.column}
                                >
                                    <Product {...value} />
                                </Grid>
                            ))}
                        </Grid>
                    </>
                </MyContainer>
            </div>
        </Box>
    );
};
export default ProductsList;
