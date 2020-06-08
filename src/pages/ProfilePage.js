<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { Button } from "../components/Button";
import { user } from "../reducers/user"
=======
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
//import { Button } from "./Button";
>>>>>>> Kajsa_development

const ProfileDetails = styled.section``

export const ProfilePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
<<<<<<< HEAD
  const handleSignOut = () => {
    dispatch(user.actions.logout());
  }
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userName = useSelector((store) => store.user.login.name);
  const userEmail = useSelector((store) => store.user.login.email);
  const userStreet = useSelector((store) => store.user.login.street);
  const userPostcode = useSelector((store) => store.user.login.postcode);
  const userCity = useSelector((store) => store.user.login.city);
  const userTelephone = useSelector((store) => store.user.login.telephone);
=======
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userName = useSelector((store) => store.user.login.name)
  const userEmail = useSelector((store) => store.user.login.email)
  const userStreet = useSelector((store) => store.user.login.street)
  const userPostcode = useSelector((store) => store.user.login.postcode)
>>>>>>> Kajsa_development

  return (
    <ProfileDetails>
      {accessToken && (
        <div>
          <h4>Your profile</h4>
          <h4>{userName}</h4>
          <h4>{userEmail}</h4>
          <h4>{userStreet}</h4>
          <h4>{userPostcode}</h4>
          <h4>{userCity}</h4>
          <h4>{userTelephone}</h4>
        </div>
<<<<<<< HEAD
      }
      {!accessToken &&
        history.push('/login')
      }

      <Button title="Signout" onClick={handleSignOut} />
=======
      )}
      {!accessToken && history.push('/login')}
>>>>>>> Kajsa_development
    </ProfileDetails>
  )
}
