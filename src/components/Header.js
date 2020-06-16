import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../reducers/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Hamburger } from './Hamburger'

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin: 10px 20px;
  box-sizing: border-box;
  text-transform: uppercase;

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    height: 40px;
    margin: 3px 10px 10px 10px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 0 1fr 2fr;
  }
`
const Title = styled.h1`
  margin: 0;
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: 24px;
  }

`
const NavList = styled.ul`
  justify-self: flex-end;
  margin: 0;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    height: 40px;
    margin-bottom: 10px;
  }
`
const ListItem = styled.li`
  display: block;
  float: left;
  padding: 0;
  position: relative;
  font-weight: bold;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`
const DesktopNav = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: inline;
  }
`

export const Header = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const cartItems = useSelector((store) => store.cart.items) //denna la jag till
  const totalProducts = cartItems.length //denna la jag till

  const handleSignOut = () => {
    dispatch(user.actions.logout())
  }

  return (
    <Nav>
      <Hamburger />

      <Link to="/">
        <Title>FINAL PROJECT</Title>
      </Link>

      <NavList>
        <Link to="/cart">
          <ListItem>
            <FontAwesomeIcon icon={faShoppingCart} /> ({totalProducts})
          </ListItem>
        </Link>

        <DesktopNav>
          <Link to="/products">
            <ListItem>Products</ListItem>
          </Link>
          <Link to="/market">
            <ListItem>Market</ListItem>
          </Link>

          {!accessToken && (
            <>
              <Link to="/login">
                <ListItem>Log in</ListItem>
              </Link>
              <Link to="/signup">
                <ListItem>Sign up</ListItem>
              </Link>
            </>
          )}

          {accessToken && (
            <>

              <Link to="/sell">
                <ListItem>List product</ListItem>
              </Link>
              <Link to="/profilepage">
                <ListItem>Profile</ListItem>
              </Link>
              <Link to="/">
                <ListItem onClick={handleSignOut}>Sign out</ListItem>
              </Link>
            </>
          )}
        </DesktopNav>
      </NavList>
    </Nav>
  )
}
