import React from "react";
import { Grid, CardMedia } from "@mui/material";
import PrincipalInformation from "../components/principalInformation/PrincipalInformation";
import Description from "./Description";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid container spacing={2} >
      <Grid item xs={3}>
        <CardMedia
        component="img"
        alt="Github Profile"
        image={avatar_url}
        />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation userState={userState} />
        <Description userState={userState}/>
      </Grid>
    </Grid>
  );
};

export default UserCard;
