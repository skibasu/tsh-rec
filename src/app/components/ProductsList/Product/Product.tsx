import React, { useState } from "react";
import clsx from "clsx";
import { IProduct } from "../../../../app-models/app.models";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";
import { Modal, Backdrop, Fade, IconButton } from "@material-ui/core";
import { ReactComponent as StarFull } from "../../Icons/star-full.svg";
import { ReactComponent as StarEmpty } from "../../Icons/star-empty.svg";
import { ReactComponent as Close } from "../../Icons/close.svg";

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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            height: "100%",
            minHeight: "400px",
            [theme.breakpoints.up("md")]: {
                maxWidth: "100%",
                minHeight: "342px",
                width: "100%",
            },
            [theme.breakpoints.up("lg")]: {
                minHeight: "400px",
            },

            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: 8,
        },
        media: {
            height: 0,
            paddingTop: "52%",
            [theme.breakpoints.up("lg")]: {
                paddingTop: "59%",
            },
        },
        media1: {
            height: 0,
            paddingTop: "109.3%",
            [theme.breakpoints.up("lg")]: {
                paddingTop: "59%",
            },
        },
        blackAndWhite: {
            filter: "grayscale(100%)",
            opacity: "50%",
        },
        body: {
            backgroundColor: "#fff",
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
        },
        content: {
            //  padding: "10px 6px",
            padding: "10px 16px",
        },
        content1: {
            padding: "24px",
            [theme.breakpoints.up("lg")]: {
                padding: "24px 34px",
            },
        },
        subtitle1: {
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "24px",
        },
        action: {
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: "auto",
            padding: "8px 8px 26px",
            [theme.breakpoints.up("lg")]: {
                padding: "8px 8px 23px",
            },
        },
        box: {
            margin: "0 auto 9px",
            width: "94%",
            padding: 0,
            "& svg": {
                width: "16px",
                height: "16px",
                marginRight: "8px",
            },
        },
        badge: {
            position: "absolute",
            top: "15px",
            left: 0,
        },
        button: {
            width: "94%",
            margin: "0 auto !important",
            textTransform: "none",
            boxShadow: "none",
            "&:disabled": {
                background: "#9194A5",
            },
        },
        modal: {
            background: "rgba(26, 27, 29, 0.9)",
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
            outline: "none",

            overflow: "auto",
            height: "100%",
            minHeight: 570,
        },
        paper: {
            position: "relative",
            width: "87%",
            minHeight: 570,
            maxWidth: 600,
            background: "#FFFFFF",
            boxShadow: "0px 8px 32px rgba(17, 18, 20, 0.158514)",
            borderRadius: 8,
            outline: "none",
            "&:focus": {
                outline: "none",
            },
            [theme.breakpoints.up("lg")]: {
                minWidth: 600,
                minHeight: 530,
            },
        },
        close: {
            position: "absolute",
            zIndex: 2,
            width: 38,
            height: 38,
            top: 15,
            right: 15,
        },
    })
);

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
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    const onModal = () => {
        setModalState(!toggleModal);
    };

    return (
        <>
            <Card className={classes.root}>
                <CardMedia
                    image={image}
                    title={name}
                    className={
                        active
                            ? classes.media
                            : clsx(classes.media, classes.blackAndWhite)
                    }
                />
                <CardContent className={classes.content}>
                    <Typography variant="h4" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {description}
                    </Typography>
                </CardContent>

                <CardActions className={classes.action}>
                    <Box className={classes.box}>
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
                        className={classes.button}
                        disabled={!active}
                        onClick={onModal}
                    >
                        Show details
                    </Button>
                </CardActions>
                {promo && (
                    <CustomBadge name="Promo" className={classes.badge} />
                )}
            </Card>
            <Modal
                aria-labelledby="product-modal"
                aria-describedby="product-sample-modal"
                className={classes.modal}
                open={toggleModal}
                onClose={onModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                disableRestoreFocus={true}
            >
                <Fade in={toggleModal}>
                    <Card className={classes.paper}>
                        <CardMedia
                            image={image}
                            title={name}
                            style={{ borderRadius: "8px" }}
                            className={classes.media1}
                        />
                        <CardContent className={classes.content1}>
                            <Typography variant="h3" component="h2">
                                {name}
                            </Typography>
                            <Typography
                                variant="body1"
                                component="p"
                                className={classes.subtitle1}
                            >
                                {description}
                            </Typography>
                        </CardContent>
                        <IconButton
                            className={classes.close}
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            onClick={onModal}
                        >
                            <Close />
                        </IconButton>
                    </Card>
                </Fade>
            </Modal>
        </>
    );
};

export default Product;
