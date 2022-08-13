import styled from "styled-components";
import ErrorMessage from "./components/ErrorMessage";

const Wrapper = styled.div`
  & ~ & {
    margin-top: 18px;
  }

  position: relative;
`;

const FormElement = ({ children, errorMessage }) => (
  <Wrapper>
    {children}
    {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
  </Wrapper>
);

export default FormElement;
