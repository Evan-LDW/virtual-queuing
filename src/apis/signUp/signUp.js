import API from "../../libs/API";

const signUp = ({
  emailOrPhoneNo,
  password
}) => API.post('/auth/sign-up', {
  email: emailOrPhoneNo,
  password,
})

export default signUp
