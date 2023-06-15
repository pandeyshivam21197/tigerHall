import { TextField, TextFieldVariants } from "@mui/material";
import React, { FC } from "react";

interface ITextInputProps {
  label: string;
  variant: TextFieldVariants;
}

export const TextInput: FC<ITextInputProps> = ({
  label,
  variant = "outlined",
}) => {
  return <TextField id="outlined-basic" label={label} variant={variant} />;
};
