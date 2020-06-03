import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    secretMessage: null,
    errorMessage: null,
  },
}

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      //console.log(`Access Token: ${accessToken}`)
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      //console.log(`User Id: ${userId}`)
      state.login.userId = userId
    },
    setProfilePage: (state, action) => {
      const { profilePage } = action.payload
      //console.log(`Secret Message: ${profilePage}`)
      state.login.profilePage = profilePage
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      //console.log(`Error Message: ${errorMessage}`)
      state.login.errorMessage = errorMessage
    },
  }
})

// Thunk to login user
export const login = (email, password) => {
  const LOGIN_URL = 'http://localhost:8080/sessions'
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw 'Unable to sign in.'
      })
      .then((json) => {
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken
          })
        )
        dispatch(user.actions.setUserId({ userId: json.userId }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

//Thunk to sign up new user
export const signup = (name, email, password, street, postcode, city, telephone) => {
  const SIGNUP_URL = 'http://localhost:8080/users'
return (dispatch) => {
  fetch(SIGNUP_URL, {
    method: 'POST',
    body: JSON.stringify({ name, email, password, street, postcode, city, telephone }),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => {
      if (!res.ok) {
        throw 'Could not create account.'
      }
      return res.json()
    })
    .then((json) => {
      dispatch(
        user.actions.setAccessToken({
          accessToken: json.accessToken,
        })
      )
      dispatch(user.actions.setUserId({ userId: json.userId }))
    })
    .catch((err) => {
      dispatch(user.actions.setErrorMessage({ errorMessage: err }))
    })
      .then((res) => {
        if (!res.ok) {
          throw 'Could not create account.'
        }
        return res.json()
      })
      .then((json) => {
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        )
        dispatch(user.actions.setUserId({ userId: json.userId }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

//Thunk to get users profile page
export const getProfilePage = () => {
  const USERS_URL = `http://localhost:8080/users/${userId}`
  return (dispatch, getState) => {
    const accessToken = getState().user.login.accessToken;
    const userId = getState().user.login.userId
    fetch(USERS_URL, {
      method: 'GET',
      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        throw 'Could not get profile information. Make sure you are logged in.'
      })
      .then((json) => {
        dispatch(
          user.actions.setProfilePage({ profilePage: JSON.stringify(json) })
        )
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      })
  }
}

//Thunk to logout user
export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setProfilePage({ profilePage: null }))
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
    dispatch(user.actions.setAccessToken({ accessToken: null }))
    dispatch(user.actions.setUserId({ userId: 0 }))
  }
}