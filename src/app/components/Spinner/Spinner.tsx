import classes from "*.module.css";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ReactComponent as SpinnerIcon } from "../Icons/spinner.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        spinner: {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
        },
    })
);

const Spinner: React.FC = () => {
    const classes = useStyles();
    return <CircularProgress className={classes.spinner} />;
};

export default Spinner;
