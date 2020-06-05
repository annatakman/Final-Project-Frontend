import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../reducers/user"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  margin: 0;
  padding: 0 0 0 20px;

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
      font-size: 20px;
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

  @media (min-width: 768px) {
    padding: 1rem;
    }
`

export const Header = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const handleSignOut = () => {
    dispatch(logout());
  }

  return (
    <Nav>
      <Link to='/'>
        <Title>FINAL PROJECT</Title>
      </Link>

      <NavList>
        <ListItem>
          Cart
        </ListItem>

        {!accessToken &&
          <>
            <Link to='/login'>
              <ListItem>
                Log in
              </ListItem>
            </Link>
            <Link to='/signup'>
              <ListItem>
                Sign up
              </ListItem>
            </Link>
          </>
        }

        {accessToken &&
          <>
            <Link to='/profilepage'>
              <ListItem>
                Profile
              </ListItem>
            </Link>
            <Link to='/'>
              <ListItem onClick={handleSignOut}>
                Sign out
              </ListItem>
            </Link>
          </>
        }
      </NavList>
    </Nav>
  )
}