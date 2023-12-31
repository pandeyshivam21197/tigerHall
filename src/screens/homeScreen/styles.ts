import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.pageBackground,
      padding: "26px 50px",
      display: "flex",
      flex: 1,
      flexDirection: "column",
    },
    newsCardList: {
      padding: "24px 0",
    },
  })
);
