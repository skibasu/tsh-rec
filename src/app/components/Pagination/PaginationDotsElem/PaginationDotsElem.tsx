import React from "react";
import { useStyles } from "./stylesPaginationDotsElem";

interface IProps {
    value: number;
}

const MyPaginationDotsElem: React.FC<IProps> = ({ value }) => {
    const classes = useStyles();
    return (
        <span key={value + "dots"} className={classes.elemDot}>
            ...
        </span>
    );
};

export default MyPaginationDotsElem;
