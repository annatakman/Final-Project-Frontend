import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    accessToken: null,
    userId: null,
    errorMessage: null,
    name: null,
    email: null,
    street: null,
    postcode: null,
    city: null,
    telephone: null,
    products: []
  },
}

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.login.userId = userId
    },
    setName: (state, action) => {
      const { name } = action.payload
      state.login.name = name
    },
    setEmail: (state, action) => {
      const { email } = action.payload
      state.login.email = email
    },
    setStreet: (state, action) => {
      const { street } = action.payload
      state.login.street = street
    },
    setPostcode: (state, action) => {
      const { postcode } = action.payload
      state.login.postcode = postcode
    },
    setCity: (state, action) => {
      const { city } = action.payload
      state.login.city = city
    },
    setTelephone: (state, action) => {
      const { telephone } = action.payload
      state.login.telephone = telephone
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      state.login.errorMessage = errorMessage
    },
    setProducts: (state, action) => {
      const { products } = action.payload
      state.login.products = products
    },
    logout: () => {
      return initialState
    },
  },
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
        //console.log(res)
        throw new Error('Unable to sign in.')
      })
      .then((json) => {
        console.log(json)
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setUserId({ userId: json._id }))
        dispatch(user.actions.setName({ name: json.name }))
        dispatch(user.actions.setEmail({ email: json.email }))
        dispatch(user.actions.setStreet({ street: json.street }))
        dispatch(user.actions.setPostcode({ postcode: json.postcode }))
        dispatch(user.actions.setCity({ city: json.city }))
        dispatch(user.actions.setTelephone({ telephone: json.telephone }))
        dispatch(user.actions.setProducts({ products: json.products }))
      })
      .catch((err) => {
        //dispatch(user.actions.setErrorMessage({ errorMessage: err }))
        dispatch(
          user.actions.setErrorMessage({
            errorMessage: { message: 'Unable to sign in' },
          })
        )
        console.log(err)
      })
  }
}

// Thunk to sign up new user
export const signup = (
  name,
  email,
  password,
  street,
  postcode,
  city,
  telephone
) => {
  const SIGNUP_URL = 'http://localhost:8080/users'
  return (dispatch) => {
    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        street,
        postcode,
        city,
        telephone,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not create account.')
        }
        return res.json()
      })
      .then((json) => {
        dispatch(
          user.actions.setAccessToken({ accessToken: json.user.accessToken })
        )
        dispatch(user.actions.setUserId({ userId: json.user.userId }))
        dispatch(user.actions.setName({ name: json.user.name }))
        dispatch(user.actions.setEmail({ email: json.user.email }))
        dispatch(user.actions.setStreet({ street: json.user.street }))
        dispatch(user.actions.setPostcode({ postcode: json.user.postcode }))
        dispatch(user.actions.setCity({ city: json.user.city }))
        dispatch(user.actions.setTelephone({ telephone: json.user.telephone }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      })
  }
}

// // Thunk to logout user
// export const logout = () => {
//   return (dispatch) => {
//     dispatch(user.actions.setErrorMessage({ errorMessage: null }));
//     dispatch(user.actions.setAccessToken({ accessToken: null }));
//     dispatch(user.actions.setUserId({ userId: 0 }))
//     dispatch(user.actions.setName({ name: json.user.name }))
//     dispatch(user.actions.setEmail({ email: json.user.email }))
//     dispatch(user.actions.setStreet({ street: json.user.street }))
//     dispatch(user.actions.setPostcode({ postcode: json.user.postcode }))
//     dispatch(user.actions.setCity({ city: json.user.city }))
//     dispatch(user.actions.setTelephone({ telephone: json.user.telephone }))
//   };
// };
