import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        // Styles for ProductList

        rootList: {
            padding: "24px 0 20px",
            [theme.breakpoints.up("lg")]: {
                padding: "55px 0 20px",
            },
        },
        columnList: {
            marginBottom: "12px",
            [theme.breakpoints.up("lg")]: {
                marginBottom: "8px",
            },
        },
    })
);
