import React from 'react'
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin: 0;
  padding: 0 0 0 20px;
`
const Title = styled.h1``
const NavList = styled.ul``
const ListItem = styled.li`
  display: block;
  float: left;
  padding: 1rem;
  position: relative;
`

export const Header = () => {
  return (
    <Nav>
      <Link to='/'>
        <Title>FINAL PROJECT</Title>
      </Link>

      <NavList>
        <ListItem>
          Cart
        </ListItem>

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
      </NavList>
    </Nav>
  )
}