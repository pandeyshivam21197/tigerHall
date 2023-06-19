import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: any) =>
  createStyles({
    textInput: {
      display: "flex",
      flex: 1,
      backgroundColor: theme.palette.grey["700"],
      borderRadius: "4px",
      padding: "0 12px",
    },
    searchIcon: { marginLeft: "12px" },
  })
);
