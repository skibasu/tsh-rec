import React from "react";
import clsx from "clsx";
import { useStyles } from "./styles";

interface IProps {
    currentPage: number;
    meta: any;
    onPaginate: (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        page: number
    ) => void;
}

const MyPaginationLastElem: React.FC<IProps> = ({
    currentPage,
    meta,
    onPaginate,
}) => {
    const classes = useStyles();
    return (
        <li className={classes.elem}>
            <a
                href="#"
                className={
                    meta && currentPage === meta.totalPages
                        ? clsx(classes.button, classes.notActive)
                        : classes.button
                }
                onClick={(e) => onPaginate(e, meta ? meta.totalPages : 0)}
            >
                Last
            </a>
        </li>
    );
};

export default MyPaginationLastElem;
