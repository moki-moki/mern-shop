import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/thunk";
import { SidebarSelect } from "../../styles/AllProductsPageStyles/SidebarStyles";
import {
  Input,
  InputCotnainer,
  LoginContainer,
  RegisterLink,
  SubmitBtn,
} from "../../styles/Auth/LoginStyles";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    navigate("/");
    try {
      register(dispatch, { username, email, password, isAdmin });
    } catch (error) {
      console.log(error);
    }
  };

  const roleChange = (e) => {
    if (e.value === "2") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <LoginContainer>
      <InputCotnainer>
        <Input
          type="text"
          value={username}
          placeholder="Username..."
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          value={email}
          placeholder="Email..."
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Password..."
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <SidebarSelect
          // onChange={(e) => setIsAdmin(e.target.value)}
          onChange={(e) => roleChange(e.target)}
          defaultValue="1"
        >
          <option value="1">Normal User</option>
          <option value="2">Admin</option>
        </SidebarSelect>
        <SubmitBtn onClick={(e) => registerHandler(e)}>Register</SubmitBtn>
      </InputCotnainer>
      <h3>
        Already have an account? <RegisterLink to="/login">Login</RegisterLink>
      </h3>
    </LoginContainer>
  );
};

export default Register;
