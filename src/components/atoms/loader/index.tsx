import React from "react";
import { CircularProgress } from "@mui/material";
import { useStyles } from "./styles";

export const Loader = () => {
  const styles = useStyles();

  return <CircularProgress className={styles.container} />;
};
