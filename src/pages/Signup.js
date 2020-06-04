import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { user, login, signup } from '../reducers/user'
import styled from 'styled-components'
//import { Link } from "react-router-dom";
import { Button } from '../components/Button'

const SIGNUP_URL = 'http://localhost:8080/users'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin: 10px;
    color: #254b62;
  }
`

export const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  //const accessToken = useSelector((store) => store.user.login.accessToken);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // To sign up a user.
  const handleSignup = (event) => {
    event.preventDefault()
    dispatch(signup(name, email, password))
    setName('')
    setEmail('')
    setPassword('')
    history.push('/login')
  }

  return (
    <Section>
      <Form onSubmit={handleSignup}>
        <label htmlFor="name">
          Name
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
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

        <Button type="submit" title="Sign up" />
      </Form>
    </Section>
  )
}
