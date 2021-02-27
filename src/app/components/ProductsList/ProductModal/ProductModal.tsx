import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Modal,
    Backdrop,
    Fade,
    IconButton,
} from "@material-ui/core";
import { ReactComponent as Close } from "../../Icons/close.svg";
import { useStyles } from "./stylesProductModal";

interface IProps {
    toggleModal: boolean;
    onModal: () => void;
    image: string;
    title: string;
    description: string;
}

const ProductModal: React.FC<IProps> = ({
    toggleModal,
    image,
    title,
    description,
    onModal,
}) => {
    const classes = useStyles();
    return (
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
                <Card className={classes.paperModal}>
                    <CardMedia
                        image={image}
                        title={title}
                        className={classes.media1Modal}
                    />
                    <CardContent className={classes.content1Modal}>
                        <Typography variant="h3" component="h2">
                            {title}
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            className={classes.subtitle1Modal}
                        >
                            {description}
                        </Typography>
                    </CardContent>
                    <IconButton
                        className={classes.closeModal}
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
    );
};

export default ProductModal;
