import React from "react";
import { Stack, Typography } from "@mui/material";

const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack>
        <Typography> {name}</Typography>
        <Typography> {created_at}</Typography>
      </Stack>
      <Typography> {login}</Typography>
    </>
  );
};

export default PrincipalInformation;
