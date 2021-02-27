import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useAction";
import MyPaginationElem from "./MyPaginationElem";
import MyPaginationDotsElem from "./MyPaginationDotsElem";
import MyPaginationFirstElem from "./MyPaginationFirstElem";
import MyPaginationLastElem from "./MyPaginationLastElem";
import { useStyles } from "./styles";

const Pagination: React.FC = () => {
    const classes = useStyles();
    const { fetchProducts } = useActions();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const state = useSelector((state: any) => state);
    const { meta } = state.products.data;

    const onPaginate = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        page: number
    ) => {
        e.preventDefault();
        setCurrentPage(page);
        page !== currentPage && fetchProducts(state.query.query + page);
    };

    const createPaginationPoints = (num: number) => {
        const arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }

        if (arr.length < 6) {
            return arr.map((v, i) => (
                <MyPaginationElem
                    key={i}
                    value={v}
                    currentPage={currentPage}
                    onPaginate={onPaginate}
                />
            ));
        } else {
            let start = 0;

            if (currentPage < 1) {
                start = currentPage - 1;
            } else if (currentPage > 1 && currentPage < arr.length - 3) {
                start = currentPage - 2;
            } else if (currentPage > arr.length - 3) {
                start = currentPage - 8;
            } else if (currentPage === arr.length - 3) {
                start = arr.length - 6;
            }
            const arr1 = arr.slice(start, start + 3);
            const arr2 = arr.slice(arr.length - 3, arr.length);
            const mixedArray = [...arr1, ...arr2];

            return mixedArray.map((v, i) => {
                return (
                    <>
                        <MyPaginationElem
                            key={i}
                            value={v}
                            currentPage={currentPage}
                            onPaginate={onPaginate}
                        />
                        {mixedArray[0] + 5 <
                            mixedArray[mixedArray.length - 1] &&
                            i === 2 && <MyPaginationDotsElem value={v} />}
                    </>
                );
            });
        }
    };

    return (
        <>
            <ul
                className={classes.list}
                data-pages={meta ? meta.totalPages : 0}
            >
                {meta && meta.totalPages > 6 && (
                    <MyPaginationFirstElem
                        currentPage={currentPage}
                        onPaginate={onPaginate}
                    />
                )}
                {meta &&
                    meta.totalPages > 1 &&
                    createPaginationPoints(meta.totalPages)}
                {meta && meta.totalPages > 6 && (
                    <MyPaginationLastElem
                        currentPage={currentPage}
                        meta={meta}
                        onPaginate={onPaginate}
                    />
                )}
            </ul>
        </>
    );
};

export default Pagination;
