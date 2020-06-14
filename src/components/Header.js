import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../reducers/user'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  margin: 0;
  padding: 6px 0 6px 20px;
  text-transform: uppercase;

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    height: 40px;
  }
`
const Title = styled.h1`
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`
const NavList = styled.ul`
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`
const ListItem = styled.li`
  display: block;
  float: left;
  padding: 0.5rem;
  position: relative;
  font-weight: bold;

  @media (min-width: 768px) {
    padding: 1rem;
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
      <Link to="/">
        <Title>FINAL PROJECT</Title>
      </Link>

      <NavList>
        <Link to="/cart">
          <ListItem>
            <FontAwesomeIcon icon={faShoppingCart} /> ({totalProducts})
          </ListItem>
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
            <Link to="/profilepage">
              <ListItem>Profile</ListItem>
            </Link>
            <Link to="/">
              <ListItem onClick={handleSignOut}>Sign out</ListItem>
            </Link>
          </>
        )}
      </NavList>
    </Nav>
  )
}
