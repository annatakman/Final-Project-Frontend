import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user, login } from '../reducers/user'
import { ProfilePage } from './ProfilePage'
import { Button } from '../components/Button'

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
  }, [accessToken])

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
  )
}
