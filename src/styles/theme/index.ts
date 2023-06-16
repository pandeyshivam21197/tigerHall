import { createTheme, responsiveFontSizes } from "@mui/material";
import { darkPalette } from "./darkPalette";

export interface TypographyVariantsOptions {
  labelRegular?: React.CSSProperties;
  labelBold?: React.CSSProperties;
  labelMedium?: React.CSSProperties;
  subHeadingRegular?: React.CSSProperties;
  subHeadingMedium?: React.CSSProperties;
  subHeadingBold?: React.CSSProperties;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    labelRegular: React.CSSProperties;
    labelBold: React.CSSProperties;
    labelMedium: React.CSSProperties;
    subHeadingRegular: React.CSSProperties;
    subHeadingMedium: React.CSSProperties;
    subHeadingBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    labelRegular?: React.CSSProperties;
    labelBold?: React.CSSProperties;
    labelMedium?: React.CSSProperties;
    subHeadingRegular?: React.CSSProperties;
    subHeadingMedium?: React.CSSProperties;
    subHeadingBold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    labelRegular: true;
    labelBold: true;
    labelMedium: true;
    subHeadingRegular: true;
    subHeadingMedium: true;
    subHeadingBold: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    textColor: Palette["primary"];
    component: Palette["primary"];
  }

  interface PaletteOptions {
    textColor: PaletteOptions["primary"];
    component: PaletteOptions["primary"];
  }

  interface PaletteColor {
    newsCard?: string;
  }

  interface SimplePaletteColorOptions {
    newsCard?: string;
  }
}

let theme = createTheme({
  palette: darkPalette,
  typography: {
    fontFamily: "Regular, Medium, Bold",
    labelRegular: {
      lineHeight: 14.4,
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Bold",
    },
    labelBold: {
      lineHeight: 14.4,
      fontSize: 12,
      fontWeight: 700,
      fontFamily: "Bold",
    },
    labelMedium: {
      lineHeight: 14.4,
      fontSize: 12,
      fontWeight: 700,
      fontFamily: "Bold",
    },
    subHeadingRegular: {
      lineHeight: 19,
      fontSize: 16,
      fontWeight: 400,
      fontFamily: "Bold",
    },
    subHeadingMedium: {
      lineHeight: 19,
      fontSize: 16,
      fontWeight: 500,
      fontFamily: "Bold",
    },
    subHeadingBold: {
      lineHeight: 19,
      fontSize: 16,
      fontWeight: 700,
      fontFamily: "Bold",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
  font-family: "Regular";
  src: local("NeueMontreal-Regular"),
    url("./assets/fonts/NeueMontreal-Regular.otf") format("otf");
}

@font-face {
  font-family: "Medium";
  src: local("NeueMontreal-Regular"),
    url("./assets/fonts/NeueMontreal-Medium.otf") format("otf");
}

@font-face {
  font-family: "Bold";
  src: local("NeueMontreal-Bold"),
    url("./assets/fonts/NeueMontreal-Bold.otf") format("otf");
}
      `,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
