import { createTheme, responsiveFontSizes } from "@mui/material";
import { darkPalette } from "./darkPalette";
//@ts-ignore
import NeueMontrealBold from "../../assets/fonts/NeueMontreal-Bold.otf";
//@ts-ignore
import NeueMontrealMedium from "../../assets/fonts/NeueMontreal-Medium.otf";
//@ts-ignore
import NeueMontrealRegular from "../../assets/fonts/NeueMontreal-Regular.otf";

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
    pageBackground: string;
  }

  interface PaletteOptions {
    textColor: PaletteOptions["primary"];
    pageBackground: string;
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
      lineHeight: "14.4px",
      fontSize: "12px",
      fontWeight: 400,
      fontFamily: "Bold",
    },
    labelBold: {
      lineHeight: "14.4px",
      fontSize: "12px",
      fontWeight: 700,
      fontFamily: "Bold",
    },
    labelMedium: {
      lineHeight: "14.4px",
      fontSize: "12px",
      fontWeight: 700,
      fontFamily: "Bold",
    },
    subHeadingRegular: {
      lineHeight: "19px",
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "Bold",
    },
    subHeadingMedium: {
      lineHeight: "19px",
      fontSize: "16px",
      fontWeight: 500,
      fontFamily: "Bold",
    },
    subHeadingBold: {
      lineHeight: "19px",
      fontSize: "16px",
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
    url(${NeueMontrealRegular}) format("otf");
}

@font-face {
  font-family: "Medium";
  src: local("NeueMontreal-Regular"),
    url(${NeueMontrealMedium}) format("otf");
}

@font-face {
  font-family: "Bold";
  src: local("NeueMontreal-Bold"),
    url(${NeueMontrealBold}) format("otf");
}
      `,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
