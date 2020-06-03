import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";

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
  const handleLogin = (event) => {};
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
