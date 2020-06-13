import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../reducers/user'
import { Button } from '../components/Button'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dciqrlzem/image/upload/v1591728323/products/karina-tess-H14pfhlfr24-unsplash_rn9vow.jpg');
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  min-height: 80vh;
`

const Form = styled.form`
  display: grid;
  margin: 10px;
  width: 100%;
  max-width: 400px;
`
const Label = styled.p`
  color: transparent;
  font-size: 0;
`
const Input = styled.input`
  margin: 5px 0 5px 0;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #fff;
  outline: none;

  &:focus {
    border: 1px solid #1a1a1a;
  }

  ::-webkit-input-placeholder { 
    color: #747474;
    font-size: 8px;
  }
  ::-moz-placeholder {
    color: #747474;
    font-size: 8px;
  }
  :-ms-input-placeholder {
    color: #747474;
    font-size: 8px;
  }
  :-moz-placeholder {
    color: #747474;
    font-size: 8px;
  }
`
const Text = styled.p`
  margin-top: 40px;
  font-size: 10px;
  text-transform: uppercase;

  a {
    font-weight: 700;
  }
`

export const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (accessToken) {
      history.push('/profilepage')
    }
  }, [accessToken, history])

  return (
    <Section>
      <Form onSubmit={handleLogin}>
        <label htmlFor="email">
          <Label>Email</Label>
          <Input
            placeholder="EMAIL"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label htmlFor="password">
          <Label>Password</Label>
          <Input
            placeholder="PASSWORD"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <Button type="submit" title="Log in" background="#1a1a1a" color="#fff" />
      </Form>
      <Text>Don't have an account? <Link to="/signup">Sign up</Link></Text>
    </Section>
  )
}
