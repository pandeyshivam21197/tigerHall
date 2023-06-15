import { Box } from "@mui/material";
import { FC } from "react";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";

interface IFlagProps {
  iconSrc?: string;
  label: string;
}

export const Flag: FC<IFlagProps> = ({ iconSrc, label }) => {
  return (
    <Box>
      {iconSrc && <Icon src={iconSrc} />}
      <Text variant={"labelBold"}>{label}</Text>
    </Box>
  );
};
