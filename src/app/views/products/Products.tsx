import React from "react";
import Header from "../../components/Header/Header";
import ProductsList from "../../components/ProductsList/ProductsList";

export const Products: React.FC = () => {
    return (
        <>
            <Header />
            <h2>Products page</h2>
            <ProductsList />
        </>
    );
};
