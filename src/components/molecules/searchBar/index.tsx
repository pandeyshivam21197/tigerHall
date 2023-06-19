import React, { FC, useRef } from "react";
import { TextInput } from "../../atoms/textInput";
import { InputAdornment } from "@mui/material";
import { Icon } from "../../atoms/icon";
import Icons from "../../../assets/icons";
import { useStyles } from "./styles";

interface ISearchBarProps {
  onSearchCallback: (searchText: string) => void;
}

export const SearchBar: FC<ISearchBarProps> = ({ onSearchCallback }) => {
  const styles = useStyles();
  const debounce = useRef<NodeJS.Timeout>();

  const onSearchChange = (searchText: string) => {
    if (debounce.current) {
      clearInterval(debounce.current);
    }

    debounce.current = setTimeout(() => {
      onSearchCallback(searchText);
    }, 300);
  };

  return (
    <TextInput
      className={styles.textInput}
      inputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon className={styles.searchIcon} src={Icons.search} />
          </InputAdornment>
        ),
      }}
      variant="standard"
      onChange={onSearchChange}
    />
  );
};
