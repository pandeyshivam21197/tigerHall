import { InputProps, TextField, TextFieldVariants } from "@mui/material";

import React, { FC } from "react";

interface ITextInputProps {
  label?: string;
  variant?: TextFieldVariants;
  inputProps?: InputProps;
  onChange: (changeText: string) => void;
  className?: string;
}

export const TextInput: FC<ITextInputProps> = ({
  label,
  variant = "outlined",
  inputProps,
  onChange,
  className,
}) => {
  const onTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      className={className}
      id="outlined-basic"
      label={label}
      variant={variant}
      InputProps={inputProps}
      onChange={onTextChange}
    />
  );
};
