import React, { useState } from "react";
import { Stack, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Buscador = ( { setinputUser} ) => {

    const [valueInput, setvalueInput] = useState('');

    const onSearchValueChange = (e) => {
        const inputValue = e.target.value
        setvalueInput(inputValue)
    }
    //console.log(valueInput)

    const handleSubmit = () => {
        setinputUser(valueInput)
    }


  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        placeholder="Buscar Usuario"
        id="outlined-basic"
        label="GitHub User"
        variant="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: "90%",
        }}
      />

      <IconButton
      onClick={handleSubmit}
        size="small"
        sx={{
          left: "-45px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Buscador;
