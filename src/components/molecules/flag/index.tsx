import { FC } from "react";
import { Icon } from "../../atoms/icon";
import { Text } from "../../atoms/text";
import { useStyles } from "./styles";

interface IFlagProps {
  iconSrc?: string;
  label: string;
  className?: string;
}

export const Flag: FC<IFlagProps> = ({ iconSrc, label, className }) => {
  const styles = useStyles();

  return (
    <span className={`${className} ${styles.container}`}>
      {iconSrc && <Icon className={styles.flagIcon} src={iconSrc} />}
      <Text variant={"labelBold"}>{label}</Text>
    </span>
  );
};
