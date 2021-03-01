import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./stylesPaginationFirstElem";

interface IProps {
    currentPage: number;
    onPaginate: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
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
            <Button
                disabled={currentPage === 1}
                className={classes.button}
                onClick={(e) => onPaginate(e, 1)}
            >
                First
            </Button>
        </li>
    );
};

export default MyPaginationFirstElem;
