import React from "react";
import Header from "../../components/Header/Header";
import ProductsList from "../../components/ProductsList/ProductsList";
import Pagination from "../../components/Pagination/Pagination";

export const Products: React.FC = () => {
    return (
        <>
            <Header />
            <ProductsList />
            <Pagination />
        </>
    );
};
