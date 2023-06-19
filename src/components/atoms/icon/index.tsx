import React, { FC } from "react";

interface IIconProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Icon: FC<IIconProps> = ({
  src,
  alt,
  width = 15,
  height = 15,
  className,
}) => {
  return (
    <img
      className={className}
      width={width}
      height={height}
      src={src}
      alt={alt ?? src}
    />
  );
};
