import React from "react";
import { useStyles } from "./styles";

interface IProps {
    value: number;
}

const MyPaginationDotsElem: React.FC<IProps> = ({ value }) => {
    const classes = useStyles();
    return (
        <li key={value + "dots"} className={classes.elemDot}>
            ...
        </li>
    );
};

export default MyPaginationDotsElem;
