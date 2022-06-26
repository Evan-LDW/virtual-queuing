import { useState } from "react";
import FormElement from "../FormElement";
import Input from "../Input";
import PasswordVisibilityToggle from "./components/PasswordVisibilityToggle";

const PasswordInputElement = ({
  value,
  onChange,
  placeholder,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  return (
    <FormElement suffix={(<PasswordVisibilityToggle visible={passwordVisible} onToggle={setPasswordVisible} />)}>
      <Input
        value={value}
        onChange={onChange}
        type={passwordVisible ? 'text' : 'password'}
        placeholder={placeholder}
      />
    </FormElement>
  )
}

export default PasswordInputElement
