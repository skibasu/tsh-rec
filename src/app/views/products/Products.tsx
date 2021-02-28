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
            backgroundColor: theme.palette.white.dark,
            flexGrow: 1,
            [theme.breakpoints.up("lg")]: {
                paddingTop: 145,
            },
        },
    })
);
export const Products: React.FC = () => {
    const classes = useStyles();
    const { fetchProducts } = useActions();

    useEffect(() => {
        fetchProducts({ page: 1, limit: 8 });
    }, []);
    const state = useSelector((state: any) => state);
    const { items: data } = state.products.data;
    const { error, loading, firstLoad } = state.products;

    return (
        <>
            <Header />
            <main className={classes.root}>
                {/* if is loading show spinner */}
                {loading && <Spinner />}
                {/* if is a problem with networ  show error */}
                {error && <Error error={error} />}
                {/* if isn't error and data has been loaded show Products page */}
                {!error && !loading && data && data.length && (
                    <ProductsList data={data} />
                )}
                {/* if isn't error and data has been loaded is empty and this is not firs fetch show NothingFound Page. It can happend on serch */}
                {!error && !loading && data && !data.length && firstLoad && (
                    <NothingFound />
                )}
            </main>
            <Footer />
        </>
    );
};
