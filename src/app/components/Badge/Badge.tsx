import React from "react";
import clsx from "clsx";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
interface IProps {
    name: string;
    className: any;
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "5px 10px",
            backgroundColor: theme.palette.warning.main,
            width: "75px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWight: 600,
            fontSize: "14px",
            lineHeight: 1,
        },
    })
);

const Badge: React.FC<IProps> = ({ name, className }) => {
    const classes = useStyles();
    return <Box className={clsx(classes.root, className)}>{name}</Box>;
};

export default Badge;
