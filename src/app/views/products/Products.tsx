import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useAction";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import ProductsList from "../../components/ProductsList/ProductsList";
import Footer from "../../components/Footer/Footer";
import NothingFound from "../../components/NothingFound/NothingFound";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
            backgroundColor: "#f2f2f2",
            flexGrow: 1,
        },
    })
);
export const Products: React.FC = () => {
    const classes = useStyles();
    const { fetchProducts } = useActions();
    useEffect(() => {
        fetchProducts("?limit=8&page=1");
    }, []);
    const state = useSelector((state: any) => state);
    const { items: data } = state.products.data;
    const { error, loading, firstLoad } = state.products;

    return (
        <>
            <Header />
            <main className={classes.root}>
                {loading && <Spinner />}
                {error && <Error error={error} />}
                {!error && !loading && data && <ProductsList data={data} />}
                {!error && !loading && data && !data.length && firstLoad && (
                    <NothingFound />
                )}
            </main>
            <Footer />
        </>
    );
};
