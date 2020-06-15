import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../reducers/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const MenuToggle = styled.div`
  display: block;
  position: relative;
  top: 2px;
  left: 0;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;

  a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  a:hover {
    color: tomato;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
const Span = styled.span`
  display: block;
  width: 21px;
  height: 2px;
  margin-bottom: 3px;
  border-radius: 1px;
  position: relative;
  
  background: #1a1a1a;
  
  z-index: 1;

  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;

  &:first-child {
    transform-origin: 0% 0%;
  }

  &:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
`
const Ul = styled.ul`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 100px;
  
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0%);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
`
const Li = styled.li`
  padding: 10px 0;
  font-size: 20px;
`
const Input = styled.input`
  display: block;
  width: 21px;
  height: 31px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;

  &:checked ~ ${Span} {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #1a1a1a;
  }

  &:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  &:checked ~ ${Ul} {
    transform: none;
  }
`


export const Hamburger = () => {

  return (
    <nav>
      <MenuToggle>
        <Input type="checkbox" />
        <Span></Span>
        <Span></Span>
        <Span></Span>

        <Ul>
          <Li>Home</Li>
          <Li>Cart</Li>
          <Li>Products</Li>
          <Li>Market</Li>
          <Li>List product</Li>
          <Li>Profile</Li>
          <Li>Sign out</Li>
        </Ul>
      </MenuToggle>
    </nav>
  )
}