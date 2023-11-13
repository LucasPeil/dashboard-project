import {
  FormControl,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <FormControl sx={{ width: "100%", mb: 2 }}>
      <InputLabel htmlFor="search-bar">Pesquisar...</InputLabel>

      <Input id="search-bar" endAdornment={<SearchIcon />} />
    </FormControl>
  );
};

export default SearchBar;
