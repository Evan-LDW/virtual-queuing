import styled from 'styled-components'

const Wrapper = styled.div`
  & ~ & {
    margin-top: 18px;
  }

  position: relative;
`;

const Suffix = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 18px;
  display: flex;
  align-items: center;
`;

const FormElement = ({
  suffix,
  children,
}) => (
  <Wrapper>
    {children}
    {suffix && (<Suffix>{suffix}</Suffix>)}
  </Wrapper>
)

export default FormElement
