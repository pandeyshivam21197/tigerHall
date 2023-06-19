import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: any) =>
  createStyles({
    cardContainer: {
      flex: 1,
      display: "flex",
      position: "relative",
      flexDirection: "column",
      backgroundColor: theme.palette.component.newsCard,
    },
    cardMedia: {
      flex: 1,
      display: "flex",
      position: "relative",
    },
    statusFlag: {
      display: "flex",
      flex: 1,
      position: "absolute",
      bottom: 0,
      right: 0,
      margin: "0 8px 8px 8px",
      width: "-webkit-fill-available",
      justifyContent: "space-between",
    },
    completedFlag: {
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: theme.palette.primary["50"],
      padding: "8px",
      borderTopLeftRadius: "8px",
    },
    footerActions: {
      justifyContent: "flex-end",
    },
    podCastContainer: {
      backgroundColor: theme.palette.primary.main,
      padding: "5px",
      alignItems: "center",
      display: "flex",
      borderRadius: "50%",
    },
  })
);
