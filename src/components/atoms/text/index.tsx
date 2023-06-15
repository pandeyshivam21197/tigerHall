import { Typography } from "@mui/material";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography/Typography";
import React, { FC } from "react";

interface ITextProps {
  color?: string;
  styles?: any;
  children: string;
  variant: any;
}

export const Text: FC<ITextProps> = ({
  children,
  color,
  styles = {},
  variant,
}) => {
  return (
    <Typography color={color} style={styles} variant={variant}>
      {children}
    </Typography>
  );
};
