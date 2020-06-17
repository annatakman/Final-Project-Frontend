import React from 'react'
import styled from 'styled-components/macro'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`
const Form = styled.div`
  display: grid;
  margin: 10px;
  width: 100%;

  @media (min-width: 1025px) {
    max-width: 40vw;
  }
`
const Label = styled.label`
  margin: 0;
  font-size: 10px;
  text-transform: uppercase;
`
const Input = styled.input`
  margin: 5px 0 5px 0;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d3d3d3;
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

export const ShippingInfo = ({ name, setName, street, setStreet, postcode, setPostcode, city, setCity, telephone, setTelephone }) => {

  return (
    <Section>
      <Form>
        <Label htmlFor="name">
          Name
          <Input
            id="name"
            placeholder="NAME"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
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
      </Form>
    </Section>
  )
}
