import { createMuiTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createBreakpoints" {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        textColor: Palette["primary"];
    }
    interface PaletteOptions {
        textColor: PaletteOptions["primary"];
    }
}
declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        white: Palette["primary"];
    }
    interface PaletteOptions {
        white: PaletteOptions["primary"];
    }
}
export const blue = {
    main: "#4460f7",
    dark: "#2140e8",
    contrastText: "#ffffff",
};
export const gold = {
    main: "#F9A52B",
};

export const text = {
    light: "#9194A5",
    main: "#1A1B1D",
    dark: "#000000",
};
export const white = {
    main: "#ffffff",
    dark: "#f2f2f2",
};
export const fontFamily = "Nunito, sans-serif";
export const fontSize = 18;
export const h2 = {
    fontFamily,
    fontWeight: 600,
    fontSize: 30,
    lineHeight: "40px",
    margin: "0 0  27px 0",
};
export const h3 = {
    fontFamily,
    fontSize: 24,
    lineHeight: "40px",
    fontWeight: 600,
    margin: "0 0  8px 0",
};
export const h4 = {
    fontFamily,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 1.5,
    margin: "0 0  8px 0",
};
export const body1 = {
    fontSize: 14,
    lineHeight: "16px",
    color: "#9194A5",
    fontWeight: 600,
};
export const button = {
    height: 38,
    fontSize: 14,
    fontWeight: 600,
};

export const theme = createMuiTheme({
    palette: {
        primary: blue,
        warning: gold,
        action: {
            disabledBackground: "#9194A5",
            disabled: "#ffffff",
        },

        textColor: text,
        white,
    },

    typography: {
        fontFamily,
        fontSize,
        h2,
        h3,
        h4,
        body1,
        button,
        htmlFontSize: 18,
    },
    spacing: 12,
    breakpoints: {
        values: {
            xs: 0,
            sm: 580,
            md: 768,
            lg: 992,
            xl: 1200,
            xxl: 1366,
        },
    },
});
