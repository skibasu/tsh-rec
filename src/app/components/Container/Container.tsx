import React from "react";
import { useStyles } from "./stylesContainer";

interface IProps {
    children: JSX.Element;
}

const MyContainer: React.FC<IProps> = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
};

export default MyContainer;
