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
            alignItems: "center",
            height: 36,
            padding: 0,
            margin: 0,
            [theme.breakpoints.up("lg")]: {
                height: 72,
            },
        },
        elem: {
            margin: "0 2px",
            display: "inline-flex",
        },
        elemDot: {
            margin: "0 10px",
            display: "inline-flex",
        },
        link: {
            display: "block",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: 1,
            color: "#1A1B1D",
            textDecoration: "none",
            padding: 6,
            [theme.breakpoints.up("lg")]: {
                padding: 6,
            },
        },
        button: {
            display: "inline-flex",
            textDecoration: "none",
            color: "#1A1B1D",
            fontWeight: 600,
            padding: 6,
            fontSize: "14px",
            lineHeight: 1,
            "&:first-child": {
                marginLeft: 5,
                [theme.breakpoints.up("lg")]: { marginLeft: 15 },
            },
            "&:last-child": {
                marginRight: 5,
                [theme.breakpoints.up("lg")]: { marginRight: 15 },
            },
            [theme.breakpoints.up("lg")]: {},
        },
        notActive: {
            color: "#9194A5",
            cursor: "auto",
        },
        current: {
            color: theme.palette.primary.main,
            cursor: "auto",
        },
    })
);

const Pagination: React.FC = () => {
    const classes = useStyles();
    const { fetchProducts } = useActions();
    const state = useSelector((state: any) => state);
    const { meta } = state.products.data;

    const [currentPage, setCurrentPage] = useState<number>(1);

    const onPaginate = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        page: number
    ) => {
        e.preventDefault();

        setCurrentPage(page);
        page != currentPage && fetchProducts(state.query.query + page);
    };

    const createPaginationPoints = (num: number) => {
        const arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }
        if (arr.length < 6) {
            return arr.map((v, i) => {
                return (
                    <li key={i} className={classes.elem}>
                        <a
                            href="#"
                            onClick={(e) => onPaginate(e, v)}
                            className={
                                currentPage != v
                                    ? classes.link
                                    : clsx(classes.link, classes.current)
                            }
                        >
                            {v}
                        </a>
                    </li>
                );
            });
        } else {
            let start = 0;
            if (currentPage < 1) {
                console.log("1");
                start = currentPage - 1;
            } else if (currentPage > 1 && currentPage < arr.length - 3) {
                console.log("2");
                start = currentPage - 2;
            } else if (currentPage > arr.length - 3) {
                console.log("3");
                start = currentPage - 8;
            } else if (currentPage === arr.length - 3) {
                console.log("4");
                start = arr.length - 6;
            }
            const arr1 = arr.slice(start, start + 3);
            const arr2 = arr.slice(arr.length - 3, arr.length);

            const mixedArray = [...arr1, ...arr2];
            return mixedArray.map((v, i) => {
                return (
                    <>
                        <li key={i} className={classes.elem}>
                            <a
                                href="#"
                                onClick={(e) => onPaginate(e, v)}
                                className={
                                    currentPage != v
                                        ? classes.link
                                        : clsx(classes.link, classes.current)
                                }
                            >
                                {v}
                            </a>
                        </li>
                        {mixedArray[0] + 5 <
                            mixedArray[mixedArray.length - 1] &&
                            i === 2 && (
                                <li
                                    key={v + "dots"}
                                    className={classes.elemDot}
                                >
                                    ...
                                </li>
                            )}
                    </>
                );
            });
        }
    };
    useEffect(() => {}, []);
    return (
        <>
            <ul
                className={classes.list}
                data-pages={meta ? meta.totalPages : 0}
            >
                {
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
                }
                {createPaginationPoints(meta ? meta.totalPages : 0)}
                {
                    <li className={classes.elem}>
                        <a
                            href="#"
                            className={
                                meta && currentPage === meta.totalPages
                                    ? clsx(classes.button, classes.notActive)
                                    : classes.button
                            }
                            onClick={(e) =>
                                onPaginate(e, meta ? meta.totalPages : 0)
                            }
                        >
                            Last
                        </a>
                    </li>
                }
            </ul>
        </>
    );
};

export default Pagination;
