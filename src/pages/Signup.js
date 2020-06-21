import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { signup, user } from '../reducers/user'
import { Link, useHistory } from 'react-router-dom'
import { Button } from '../lib/Button'

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.8)
    ),
    url('https://res.cloudinary.com/dciqrlzem/image/upload/v1591728323/products/karina-tess-H14pfhlfr24-unsplash_rn9vow.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const ErrorWrapper = styled.div`
  height: 20px;
`
const Form = styled.form`
  width: 100%;
  max-width: 400px;
  display: grid;
  margin: 10px;
`
const Label = styled.label`
  color: transparent;
  font-size: 0;
`
const Input = styled.input`
  width: 100%;
  margin: 5px 0 5px 0;
  padding: 10px 15px;
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

export const Signup = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [street, setStreet] = useState('')
  const [postcode, setPostcode] = useState('')
  const [city, setCity] = useState('')
  const [telephone, setTelephone] = useState('')
  const error = useSelector((store) => store.user.login.errorMessage)

  // To sign up a user.
  const handleSignup = (event) => {
    event.preventDefault()
    dispatch(signup(name, email, password, street, postcode, city, telephone))
    setName('')
    setEmail('')
    setPassword('')
    setStreet('')
    setPostcode('')
    setCity('')
    setTelephone('')
  }

  useEffect(() => {
    if (accessToken) {
      history.push('/')
    } else {
      dispatch(user.actions.setErrorMessage(''))
    }
  }, [accessToken, history, dispatch])

  return (
    <Section>
      <ErrorWrapper>{error && error.message}</ErrorWrapper>
      <Form onSubmit={handleSignup}>
        <Label htmlFor="name">
          Name
          <Input
            id="name"
            placeholder="NAME"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            minLength="1"
            maxLength="40" />
        </Label>
        <Label htmlFor="email">
          Email
          <Input
            id="email"
            placeholder="EMAIL"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
        </Label>
        <Label htmlFor="password">
          Password
          <Input
            id="password"
            placeholder="PASSWORD"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength="6" />
        </Label>
        <Label htmlFor="street">
          Street
          <Input
            id="street"
            placeholder="STREET"
            required
            value={street}
            onChange={(event) => setStreet(event.target.value)} />
        </Label>
        <Label htmlFor="postcode">
          Postal code
          <Input
            id="postcode"
            placeholder="POSTAL CODE"
            required
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)} />
        </Label>
        <Label htmlFor="city">
          City
          <Input
            id="city"
            placeholder="CITY"
            required
            value={city}
            onChange={(event) => setCity(event.target.value)} />
        </Label>
        <Label htmlFor="telephone">
          Telephone
          <Input
            id="telephone"
            placeholder="TELEPHONE"
            required
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)} />
        </Label>
        <Button
          type="submit"
          title="Sign up"
          background="#1a1a1a"
          color="#fff" />
      </Form>
      <Text>
        Already have an account? <Link to="/login">Log in</Link>
      </Text>
    </Section>
  )
}