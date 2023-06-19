import { PaletteOptions } from "@mui/material";

export const darkPalette: PaletteOptions = {
  primary: { main: "#FF5900", 50: "#FFF9F6", 100: "#FFF3ED" }, //TODO: move color family to separate file
  secondary: { main: "#F78104", 50: "#FFF8F1", 100: "#FEECD9" },
  grey: { 700: "#797670" },
  pageBackground: "#001315",
  textColor: {
    main: "#000000",
    700: "#797670",
    800: "#4D4B46",
  },
  component: {
    main: "",
    newsCard: "#FFFFFF",
  },
};
