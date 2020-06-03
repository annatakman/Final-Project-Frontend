import React, { useState } from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { user, login } from "../reducers/user";

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
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Section>
      <Form onSubmit={handleLogin}>
        <label for="email">
          Email
          <input type="email" id="email" name="email" />
        </label>
        <label for="password">
          Password
          <input type="password" id="password" name="password" />
        </label>

        <Button type="submit" title="Login" />
      </Form>
    </Section>
  );
};
