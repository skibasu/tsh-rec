import React from "react";
import clsx from "clsx";
import { useStyles } from "./styles";

interface IProps {
    key: number;
    value: number;
    onPaginate: (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        page: number
    ) => void;
    currentPage: number;
}

const MyPaginationElem: React.FC<IProps> = ({
    key,
    value,
    currentPage,
    onPaginate,
}) => {
    const classes = useStyles();
    return (
        <li key={key} className={classes.elem}>
            <a
                href="#"
                onClick={(e) => onPaginate(e, value)}
                className={
                    currentPage !== value
                        ? classes.link
                        : clsx(classes.link, classes.current)
                }
            >
                {value}
            </a>
        </li>
    );
};

export default MyPaginationElem;
