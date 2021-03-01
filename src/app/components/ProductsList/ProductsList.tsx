import React from "react";
import { isMobileOnly } from "react-device-detect";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Product from "./Product/Product";
import MyContainer from "../Container/Container";
import { useStyles } from "./stylesProductList";

interface IData {
    [key: string]: string | number;
}
const ProductsList: React.FC<any> = ({ data }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box className={classes.rootList}>
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
                                    md={isMobileOnly ? 6 : 4}
                                    xl={3}
                                    className={classes.columnList}
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
