import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { signup } from '../reducers/user'
import { Link } from "react-router-dom";
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
const Label = styled.span`
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

export const Signup = () => {
  const dispatch = useDispatch()
  // const accessToken = useSelector((store) => store.user.login.accessToken);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [street, setStreet] = useState('')
  const [postcode, setPostcode] = useState('')
  const [city, setCity] = useState('')
  const [telephone, setTelephone] = useState('')

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

  return (
    <Section>
      <Form onSubmit={handleSignup}>

        <label htmlFor="name">
          <Label>Name</Label>
          <Input
            placeholder="NAME"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
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
        <label htmlFor="street">
          <Label>Street</Label>
          <Input
            placeholder="STREET"
            required
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </label>
        <label htmlFor="postcode">
          <Label>Postal code</Label>
          <Input
            placeholder="POSTAL CODE"
            required
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
          />
        </label>
        <label htmlFor="city">
          <Label>City</Label>
          <Input
            placeholder="CITY"
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <label htmlFor="telephone">
          <Label>Telephone</Label>
          <Input
            placeholder="TELEPHONE"
            required
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </label>
        <Button type="submit" title="Sign up" background="#1a1a1a" color="#fff" />
      </Form>
      <Text>Already have an account? <Link to="/login">Log in</Link></Text>
    </Section>
  )
}
