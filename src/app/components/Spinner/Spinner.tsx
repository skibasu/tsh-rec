import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./stylesSpinner";

const Spinner: React.FC = () => {
    const classes = useStyles();
    return <CircularProgress className={classes.spinner} />;
};

export default Spinner;
