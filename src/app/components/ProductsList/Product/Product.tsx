import React, { useState } from "react";
import clsx from "clsx";
import { IProduct } from "../../../../app-models/app.models";
import { Rating } from "@material-ui/lab";
import { ReactComponent as StarFull } from "../../Icons/star-full.svg";
import { ReactComponent as StarEmpty } from "../../Icons/star-empty.svg";
import ProductModal from "../ProductModal/ProductModal";
import {
    Card,
    Box,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";
import CustomBadge from "../../Badge/Badge";
import { useStyles } from "./stylesProduct";

const Product: React.FC<IProduct> = ({
    image,
    promo,
    name,
    description,
    rating,
    active,
}) => {
    const classes = useStyles();
    const [toggleModal, setModalState] = useState<boolean>(false);

    const onModal = () => {
        setModalState(!toggleModal);
    };

    return (
        <>
            <Card className={classes.rootProduct}>
                <CardMedia
                    image={image}
                    title={name}
                    className={
                        active
                            ? classes.mediaProduct
                            : clsx(
                                  classes.mediaProduct,
                                  classes.blackAndWhiteProduct
                              )
                    }
                />
                <CardContent className={classes.contentProduct}>
                    <Typography variant="h4" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {description}
                    </Typography>
                </CardContent>

                <CardActions className={classes.actionProduct}>
                    <Box className={classes.boxProduct}>
                        <Rating
                            name="read-only"
                            value={rating}
                            readOnly
                            size="small"
                            icon={<StarFull />}
                            emptyIcon={<StarEmpty />}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                        className={classes.buttonProduct}
                        disabled={!active}
                        onClick={onModal}
                    >
                        Show details
                    </Button>
                </CardActions>
                {promo && (
                    <CustomBadge
                        name="Promo"
                        className={classes.badgeProduct}
                    />
                )}
            </Card>
            <ProductModal
                toggleModal={toggleModal}
                image={image}
                title={name}
                description={description}
                onModal={onModal}
            />
        </>
    );
};

export default Product;
