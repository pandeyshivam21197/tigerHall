import { Typography } from "@mui/material";
import React, { FC } from "react";

interface ITextProps {
  color?: string;
  styles?: any;
  children: string;
  variant: any;
  className?: string;
}

export const Text: FC<ITextProps> = ({
  children,
  color,
  styles = {},
  variant,
  className,
}) => {
  return (
    <Typography
      className={className}
      color={color}
      style={styles}
      variant={variant}
    >
      {children}
    </Typography>
  );
};
