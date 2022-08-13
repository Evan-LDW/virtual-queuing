import styled from "styled-components";
import UserInfo from "./components/UserInfo";

const Wrapper = styled.div`
  padding: 32px 24px;
  background-color: #F7F7F7;
`

const SideMenu = () => (
  <Wrapper>
    <UserInfo />
  </Wrapper>
)

export default SideMenu
