import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useAction";
import Product from "./Product/Product";

const ProductsList: React.FC = () => {
    const { fetchProducts } = useActions();
    //  TODO
    const state = useSelector((state: any) => state);
    const { items: data } = state.products.data;
    const { error, loading } = state.products;

    useEffect(() => {
        fetchProducts("?limit=8&page=1");
    }, []);
    return (
        <div className="root">
            <div className="body">
                {error && <h3>{error}</h3>}
                {loading && <h3>Loading ...</h3>}
                {!error &&
                    !loading &&
                    data &&
                    data.map((value: any) => (
                        <Product key={value.id} {...value} />
                    ))}
                {!error && !loading && data && !data.length && (
                    <h2>Nic nie znaleziono</h2>
                )}
            </div>
        </div>
    );
};
export default ProductsList;
