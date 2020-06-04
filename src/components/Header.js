import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  margin: 0;
  padding: 0 0 0 20px;

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
  const accessToken = useSelector((store) => store.user.login.accessToken)
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
            <Link to='/login'>
              <ListItem>
                Profile
              </ListItem>
            </Link>
            <Link to='/'>
              <ListItem>
                Sign out
              </ListItem>
            </Link>
          </>
        }
      </NavList>
    </Nav>
  )
}