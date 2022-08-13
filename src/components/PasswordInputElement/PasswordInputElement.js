import FormElement from "../FormElement";
import Input from "../Input";
import PasswordVisibilityToggle from "./components/PasswordVisibilityToggle/PasswordVisibilityToggle";
import styled from "styled-components";
import { useState } from "react";

const Suffix = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  display: flex;
  align-items: center;
`;

const PasswordInputElement = ({
  placeholder,
  onChange,
  value,
  errorMessage,
}) => {
  const [showEye, setShowEye] = useState(true);

  return (
    <FormElement errorMessage={errorMessage}>
      <Input
        type={showEye ? "password" : "text"}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <Suffix>
        <PasswordVisibilityToggle showEye={showEye} setShowEye={setShowEye} />
      </Suffix>
    </FormElement>
  );
};
export default PasswordInputElement;
