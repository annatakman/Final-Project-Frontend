import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { user, login } from "../reducers/user";
import { ProfilePage } from "./ProfilePage";

//const LOGIN_URL = "http://localhost:8080/sessions";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin: 10px;
    color: #254b62;
  }
`;

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
    history.push('/profilepage')
  };

  /* if (!accessToken) { */
  // If user is logged out, show login form

  return (
    <Section>
      <Form onSubmit={handleLogin}>
        <label htmlFor="email">
          Email
            <input
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
            <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <Button type="submit" title="Login" />
      </Form>
    </Section>
  );
  /* } else {
    // If user is logged in, show profile
    return <ProfilePage />;
  } */
};
//export default Login;
