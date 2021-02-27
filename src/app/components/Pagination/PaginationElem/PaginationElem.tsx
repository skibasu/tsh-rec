import React, { ReactNode } from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./stylesPaginationElem";

interface IProps {
    value: number;
    onPaginate: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        page: number
    ) => void;
    currentPage: number;
    children?: ReactNode;
}

const MyPaginationElem: React.FC<IProps> = ({
    value,
    currentPage,
    onPaginate,
    children,
}) => {
    const classes = useStyles();
    return (
        <li className={classes.elem}>
            <Button
                onClick={(e) => onPaginate(e, value)}
                disabled={currentPage === value}
                className={classes.link}
            >
                {value}
            </Button>
            {children}
        </li>
    );
};

export default MyPaginationElem;
