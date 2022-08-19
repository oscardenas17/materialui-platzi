import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Buscador from "./components/buscador/Buscador.jsx";
import UserCard from "./layout/UserCard.jsx";

import { getGitHubUser } from "./services/users";

function App() {
  const [inputUser, setinputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");

  const[notFound, setNotFound] = useState(false);

  const gettinUser = async (user) => {
    const userSearched = await getGitHubUser(user)

    if(userState === 'octocat'){
      localStorage.setItem("octocat", userSearched);
    }
    
    if(userSearched.message === 'Not Found'){
      const {octocat} = localStorage;
      setinputUser(octocat)
      setNotFound(true)
    }else{
      setUserState(userSearched)
    }
    console.log(userSearched)
  };

  useEffect(() => {
    gettinUser(inputUser)
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "600px",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Buscador inputUser={inputUser} setinputUser={setinputUser} />
      <UserCard userState={userState}/>
    </Container>
  );
}

export default App;
