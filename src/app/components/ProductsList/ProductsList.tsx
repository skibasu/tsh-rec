import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useAction";
import Product from "./Product/Product";

const ProductsList: React.FC = () => {
    const { fetchProducts } = useActions();
    //  TODO
    const state = useSelector((state: any) => state);
    const data = state.products.data.items;
    console.log(data);
    useEffect(() => {
        fetchProducts("?limit=8&page=1");
    }, []);
    return (
        <div className="root">
            <div className="body">
                {data &&
                    data.map((value: any) => (
                        <Product key={value.id} {...value} />
                    ))}
            </div>
        </div>
    );
};
export default ProductsList;
