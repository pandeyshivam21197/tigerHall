import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: "absolute",
      alignSelf: "center",
      top: "45%",
    },
  })
);
