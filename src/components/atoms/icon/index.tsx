import React, { FC } from "react";

interface IIconProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

export const Icon: FC<IIconProps> = ({ src, alt, width = 15, height = 15 }) => {
  return <img width={width} height={height} src={src} alt={alt ?? src} />;
};
