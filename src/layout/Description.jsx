import { Stack } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import PaperInformation from "../components/paperInformation/PaperInformation";
import LocationInformation from "../components/locationInformation/LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <>
      <Stack>
        {bio != null ? (
          <Typography variant="h1" color="initial">
            {bio}
          </Typography>
        ) : (
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            excepturi totam perferendis pariatur est obcaecati vel enim eius,
            quis nulla fugit possimus, cumque libero in ea, molestias cupiditate
            itaque minima.
          </Typography>
        )}
        <PaperInformation userState={userState}/> 
        <LocationInformation userState={userState}/> 
      </Stack>
    </>
  );
};

export default Description;
