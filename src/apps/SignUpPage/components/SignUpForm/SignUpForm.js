import { useState } from "react";
import styled from "styled-components";
import signUp from "../../../../apis/signUp";
import FormElement from "../../../../components/FormElement";
import Input from "../../../../components/Input";
import NakedButton from "../../../../components/NakedButton";
import PasswordInputElement from "../../../../components/PasswordInputElement";

const Login = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
`

const SignUp = styled(NakedButton)`
  width: 100%;
  border-radius: 5px;
  background: #77A48E;
  color: white;
  padding: 10px 12px;
`

const SignUpForm = ({
  setPathname,
  setAuthenticated,
}) => {
  const [emailOrPhoneNo, setEmailOrPhoneNo] = useState()
  const [password, setPassword] = useState()
  const [repeatPassword, setRepeatPassword] = useState()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        signUp({ emailOrPhoneNo, password })
          // .then((res) => {
          //   const jwt = res.headers['X-Auth-Token'.toLowerCase()]

          //   // state (memory) -> 重新加载，刷新之后数据会消失，非持久化存储 
          //   // Persistence 持久化 即把数据（如内存中的对象）保存到可永久保存的存储设备中（如磁盘
          //   // localStorage, cookie, sessionStorage

          //   localStorage.setItem('authToken', jwt)
          // })
          .then(() => setAuthenticated(true))
          .then(() => setPathname('/'))
      }}
    >
      <FormElement>
        <Input
          value={emailOrPhoneNo}
          onChange={(event) => setEmailOrPhoneNo(event.target.value)}
          placeholder="Enter Email / Phone No"
        />
      </FormElement>
      <PasswordInputElement
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <PasswordInputElement
        value={repeatPassword}
        onChange={(event) => setRepeatPassword(event.target.value)}
        placeholder="Repeat Password"
      />
      <FormElement>
        <Login href="/">Already have an account?</Login>
      </FormElement>
      <FormElement>
        <SignUp type="submit">
          Sign up
        </SignUp>
      </FormElement>
    </form>
  )
}

export default SignUpForm
