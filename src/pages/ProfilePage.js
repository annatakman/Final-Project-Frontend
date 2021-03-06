import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { edit } from '../reducers/user'
import { Button } from '../lib/Button'
import { Orders } from '../components/Orders'
import { UserProfileProducts } from '../components/UserProfileProducts'

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

const Title = styled.h1`
  text-transform: uppercase;
`

const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: 450px;
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

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const [name, setName] = useState(
    useSelector((store) => store.user.login.name)
  )
  const [email, setEmail] = useState(
    useSelector((store) => store.user.login.email)
  )
  const [street, setStreet] = useState(
    useSelector((store) => store.user.login.street)
  )
  const [postcode, setPostcode] = useState(
    useSelector((store) => store.user.login.postcode)
  )
  const [city, setCity] = useState(
    useSelector((store) => store.user.login.city)
  )
  const [telephone, setTelephone] = useState(
    useSelector((store) => store.user.login.telephone)
  )

  // To edit user profile.
  const handleEdit = (event) => {
    event.preventDefault()
    dispatch(
      edit(accessToken, userId, name, email, street, postcode, city, telephone)
    )
  }

  return (
    <Section>
      {accessToken && (
        <>
          <Title>Edit your profile here</Title>
          <Form onSubmit={handleEdit}>
            <Label htmlFor="name">
              Name
              <Input
                id="name"
                placeholder="NAME"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                minLength="1"
                maxLength="40"
              />
            </Label>
            <Label htmlFor="email">
              Email
              <Input
                id="email"
                placeholder="EMAIL"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Label>
            <Label htmlFor="street">
              Street
              <Input
                id="street"
                placeholder="STREET"
                required
                value={street}
                onChange={(event) => setStreet(event.target.value)}
              />
            </Label>
            <Label htmlFor="postcode">
              Postal code
              <Input
                id="postcode"
                placeholder="POSTAL CODE"
                required
                value={postcode}
                onChange={(event) => setPostcode(event.target.value)}
              />
            </Label>
            <Label htmlFor="city">
              City
              <Input
                id="city"
                placeholder="CITY"
                required
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </Label>
            <Label htmlFor="telephone">
              Telephone
              <Input
                id="telephone"
                placeholder="TELEPHONE"
                required
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
              />
            </Label>

            <Button
              type="submit"
              title="Save changes"
              background="#1a1a1a"
              color="#fff"
            />
          </Form>
          <Orders />
          <UserProfileProducts />
        </>
      )}
      {!accessToken && history.push('/login')}
    </Section>
  )
}
