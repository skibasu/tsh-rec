import React from "react";
import { useStyles } from "./stylesPaginationDotsElem";

interface IProps {
    value: number;
    style?: { [key: string]: string };
}

const MyPaginationDotsElem: React.FC<IProps> = ({ value, style }) => {
    const classes = useStyles();
    return (
        <span
            key={value + "dots"}
            className={classes.elemDot}
            style={style && style}
        >
            ...
        </span>
    );
};

export default MyPaginationDotsElem;
