import styled from "styled-components"
import Logo from "../../../../components/Logo"

const Wrapper = styled.div`
  flex: 1;
  padding: 32px 24px;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
  border-bottom: 1px solid #DFDFDF;
`

const Main = () => (
  <Wrapper>
    <Header>
      <Logo />
    </Header>
  </Wrapper>
)

export default Main
