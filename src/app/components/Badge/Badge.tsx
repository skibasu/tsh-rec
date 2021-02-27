import React from "react";
import clsx from "clsx";
import { Box } from "@material-ui/core";
import { useStyles } from "./stylesBadge";

interface IProps {
    name: string;
    className: any;
}

const Badge: React.FC<IProps> = ({ name, className }) => {
    const classes = useStyles();
    return <Box className={clsx(classes.root, className)}>{name}</Box>;
};

export default Badge;
