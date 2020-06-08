import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
//import { Button } from "./Button";

const ProfileDetails = styled.section``

export const ProfilePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userName = useSelector((store) => store.user.login.name)
  const userEmail = useSelector((store) => store.user.login.email)
  const userStreet = useSelector((store) => store.user.login.street)
  const userPostcode = useSelector((store) => store.user.login.postcode)

  return (
    <ProfileDetails>
      {accessToken && (
        <div>
          <h4>{userName}</h4>
          <h4>{userEmail}</h4>
          <h4>{userStreet}</h4>
          <h4>{userPostcode}</h4>
        </div>
      )}
      {!accessToken && history.push('/login')}
    </ProfileDetails>
  )
}
