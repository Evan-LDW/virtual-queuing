import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import signUp from "../../../../apis/signUp";
import FormElement from "../../../../components/FormElement";
import Input from "../../../../components/Input";
import NakedButton from "../../../../components/NakedButton";
import PasswordInputElement from "../../../../components/PasswordInputElement";
import { AuthenticationContext } from "../../../Authentication";
import getEmailErrorMessage from "./utils/getEmailErrorMessage";
import getPasswordErrorMessage from "./utils/getPasswordErrorMessage";
import getRepeatPasswordErrorMessage from "./utils/getRepeatPasswordErrorMessage/getRepeatPasswordErrorMessage";

const Login = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
`;

const SignUp = styled(NakedButton)`
  width: 100%;
  border-radius: 5px;
  background: #77a48e;
  color: white;
  padding: 10px 12px;

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(80%);
  }
`;

const ServerError = styled.div`
  border-radius: 10px;
  padding: 10px 12px;
  color: white;
  background-color: rgb(244, 67, 54);
  margin: 32px 0;
`;

// const useTouchedState = () => {
//   const [state, setState] = useState({ value: "", touched: false });
//   const setTouchedState = (value) => setState({ value, touched: true });
//   return [state, setTouchedState];
// };

const SignUpForm = () => {
  const authentication = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const [password, setPassword] = useState({ value: "", touched: false });
  const [repeatPassword, setRepeatPassword] = useState({
    value: "",
    touched: false,
  });
  const [email, setEmail] = useState({ value: "", touched: false });

  // const [password, setPassword] = useState("");
  // const [repeatPassword, setRepeatPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailTouched, setEmailTouched] = useState(false);
  // const [passwordTouched, setPasswordTouched] = useState(false);
  // const [repeatPasswordTouched, setRepeatPasswordTouched] = useState(false);

  const emailErrorMessage = getEmailErrorMessage(email.value);
  const passwordErrorMessage = getPasswordErrorMessage(password.value);
  const repeatPasswordErrorMessage = getRepeatPasswordErrorMessage(
    repeatPassword.value,
    password.value
  );

  const [serverErrorResponse, setServerErrorResponse] = useState();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const result = await signUp({
  //     email: email.value,
  //     password: password.value,
  //   });
  //   if (result) {
  //     const jwt = result.headers["X-Auth-Token".toLowerCase()];
  //     localStorage.setItem("xAuthToken", jwt);
  //     authentication.setAuthenticated(true);
  //     navigate("/");
  //   }
  //   result.catch((error) => {
  //     console.log(error.response);
  //   });
  // };
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await signUp({
          email: email.value,
          password: password.value,
        })
          .then(() => {
            authentication.setAuthenticated(true);
            navigate("/");
          })
          .catch((error) => {
            setServerErrorResponse(error.response);
          });
      }}
    >
      {serverErrorResponse?.status === 409 && (
        <ServerError>Email already exists, please use another one</ServerError>
      )}
      <FormElement errorMessage={email.touched && emailErrorMessage}>
        <Input
          value={email.value}
          placeholder="Enter Email / Phone No"
          onChange={(event) => {
            setEmail({ value: event.target.value, touched: true });
          }}
        />
      </FormElement>
      <PasswordInputElement
        value={password.value}
        placeholder="Password"
        onChange={(event) => {
          setPassword({ value: event.target.value, touched: true });
        }}
        errorMessage={password.touched && passwordErrorMessage}
      />

      <PasswordInputElement
        value={repeatPassword.value}
        placeholder="Repeat Password"
        onChange={(event) => {
          setRepeatPassword({ value: event.target.value, touched: true });
        }}
        errorMessage={repeatPassword.touched && repeatPasswordErrorMessage}
      />

      <FormElement>
        <Login href="/">Already have an account?</Login>
      </FormElement>
      <FormElement>
        <SignUp
          disabled={
            emailErrorMessage ||
            passwordErrorMessage ||
            repeatPasswordErrorMessage
          }
          type="submit"
        >
          Sign up
        </SignUp>
      </FormElement>
    </form>
  );
};

export default SignUpForm;
