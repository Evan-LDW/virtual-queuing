import styled from "styled-components";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";
import { useContext } from "react";
import { AuthenticationContext } from "../Authentication";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`;

const QueueListPage = () => {
  const authentication = useContext(AuthenticationContext);
  const navigate = useNavigate();

  if (authentication.loading) {
    console.log("Authenticating");
    return <div>Loading...</div>;
  }

  if (!authentication.authenticated) {
    console.log("Not Authenticated");
    navigate("/auth/sign-up");
    return null;
  }

  return (
    <Wrapper>
      <SideMenu />
      <Main />
    </Wrapper>
  );
};

export default QueueListPage;
