import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { user, login, signup } from '../reducers/user'
// import { Link } from "react-router-dom";
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
        <label htmlFor="street">
          Street
          <input
            required
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </label>
        <label htmlFor="postcode">
          Postal code
          <input
            required
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
          />
        </label>
        <label htmlFor="city">
          City
          <input
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <label htmlFor="telephone">
          Telephone
          <input
            required
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </label>
        <Button type="submit" title="Sign up" />
      </Form>
    </Section>
  )
}
