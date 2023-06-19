import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      gap: "24px",
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
  })
);
