import React from "react";
import clsx from "clsx";
import { useStyles } from "./styles";

interface IProps {
    currentPage: number;
    onPaginate: (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        page: number
    ) => void;
}

const MyPaginationFirstElem: React.FC<IProps> = ({
    currentPage,
    onPaginate,
}) => {
    const classes = useStyles();
    return (
        <li className={classes.elem}>
            <a
                href="#"
                className={
                    currentPage === 1
                        ? clsx(classes.button, classes.notActive)
                        : classes.button
                }
                onClick={(e) => onPaginate(e, 1)}
            >
                First
            </a>
        </li>
    );
};

export default MyPaginationFirstElem;
