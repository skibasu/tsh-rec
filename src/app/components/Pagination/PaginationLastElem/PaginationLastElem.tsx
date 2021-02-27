import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./stylesPaginationLastElem";

interface IProps {
    currentPage: number;
    meta: any;
    onPaginate: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
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
            <Button
                disabled={meta && currentPage === meta.totalPages}
                className={classes.button}
                onClick={(e) => onPaginate(e, meta ? meta.totalPages : 0)}
            >
                Last
            </Button>
        </li>
    );
};

export default MyPaginationLastElem;
