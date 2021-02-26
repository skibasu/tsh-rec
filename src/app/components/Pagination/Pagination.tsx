import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useAction";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
        },
        elem: {
            margin: "0 15px",
            width: 10,
        },
        link: {
            display: "block",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "16px",
            margin: 10,
            color: theme.palette.primary.main,
        },
        current: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main,
            cursor: "auto",
        },
    })
);

const Pagination: React.FC = () => {
    const classes = useStyles();
    const { fetchProducts } = useActions();
    const state = useSelector((state: any) => state);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [limitPages, setLimiPages] = useState<number>(10);

    const RANGE = state.products.data.meta
        ? [...Array(state.products.data.meta.totalPages)]
        : [];
    const onPaginate = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        page: number
    ) => {
        e.preventDefault();

        setCurrentPage(page);
        console.log(page);

        page != currentPage && fetchProducts(state.query.query + page);
    };
    const LIMIT = 6;

    const generateRange = () => {
        //  const start = currentPage
        //  return [start, end]
    };

    //  const itemsPerPage = meta.itemsPerPage;
    //  const totalPages = meta.totalPages;
    //  const currentPage = meta.currentPage;
    useEffect(() => {
        console.log(RANGE);
    }, []);
    return (
        <>
            <ul className={classes.list} data-range={RANGE}>
                {RANGE.map((v, i) => {
                    return (
                        <li key={i} className={classes.elem}>
                            <a
                                href="#"
                                onClick={(e) => onPaginate(e, i + 1)}
                                className={
                                    currentPage != i + 1
                                        ? classes.link
                                        : clsx(classes.link, classes.current)
                                }
                            >
                                {i + 1}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Pagination;
