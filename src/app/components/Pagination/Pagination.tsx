import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useAction";
import MyPaginationElem from "./PaginationElem/PaginationElem";
import MyPaginationDotsElem from "./PaginationDotsElem/PaginationDotsElem";
import MyPaginationFirstElem from "./PaginationFirstElem/PaginationFirstElem";
import MyPaginationLastElem from "./PaginationLastElem/PaginationLastElem";
import { useStyles } from "./styles";

const Pagination: React.FC = () => {
    const classes = useStyles();
    const { fetchProducts } = useActions();
    const state = useSelector((state: any) => state);
    const { meta } = state.products.data;

    const onPaginate = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        page: number
    ) => {
        e.preventDefault();

        page !== meta.currentPage &&
            fetchProducts({ ...state.query, page: page, limit: 8 });
    };

    const createPaginationPoints = (num: number) => {
        const arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }

        if (arr.length <= 6) {
            return arr.map((v, i) => (
                <MyPaginationElem
                    key={i}
                    value={v}
                    currentPage={meta.currentPage}
                    onPaginate={onPaginate}
                />
            ));
        } else {
            let start = 0;
            if (meta && meta.currentPage) {
                if (meta.currentPage < 1) {
                    console.log(1);
                    start = meta.currentPage - 1;
                } else if (
                    meta.currentPage > 1 &&
                    meta.currentPage < arr.length - 3
                ) {
                    console.log(2);
                    start = meta.currentPage - 2;
                } else if (meta.currentPage > arr.length - 3) {
                    console.log(3);
                    console.log(arr.length);
                    start = meta.currentPage - 8 > 0 ? meta.currentPage - 8 : 0;
                } else if (meta.currentPage === arr.length - 3) {
                    console.log(4);
                    start = arr.length - 6;
                }
            }
            const arr1 = arr.slice(start, start + 3);
            const arr2 = arr.slice(arr.length - 3, arr.length);
            const mixedArray = [...arr1, ...arr2];

            return mixedArray.map((v, i) => {
                return (
                    <MyPaginationElem
                        key={i}
                        value={v}
                        currentPage={meta.currentPage}
                        onPaginate={onPaginate}
                    >
                        {mixedArray[0] + 5 <
                            mixedArray[mixedArray.length - 1] &&
                            i === 2 && <MyPaginationDotsElem value={v} />}
                    </MyPaginationElem>
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
                        currentPage={meta.currentPage}
                        onPaginate={onPaginate}
                    />
                )}
                {meta &&
                    meta.totalPages > 1 &&
                    createPaginationPoints(meta.totalPages)}
                {meta && meta.totalPages > 6 && (
                    <MyPaginationLastElem
                        currentPage={meta.currentPage}
                        meta={meta}
                        onPaginate={onPaginate}
                    />
                )}
            </ul>
        </>
    );
};

export default Pagination;
