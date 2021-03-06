import { useState, useEffect } from "react";
import { login } from "../../redux/thunk";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  InputCotnainer,
  LoginContainer,
  SubmitBtn,
  RegisterLink,
} from "../../styles/Auth/LoginStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      login(dispatch, { email, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      {error && <h1 style={{ color: "#9b2828" }}>Wrong email or password</h1>}
      <InputCotnainer onSubmit={(e) => submitHandler(e)}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email..."
          required
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password..."
          required
        />
        <SubmitBtn type="submit" disabled={isFetching}>
          Login
        </SubmitBtn>
      </InputCotnainer>
      <h3>
        Don't have account? <RegisterLink to="/register">Register</RegisterLink>
      </h3>
      {/* {error && errorMsg} */}
    </LoginContainer>
  );
};

export default Login;
