import React from "react"
import { Provider } from "react-redux"
import { configureStore, createStore, combineReducers, applyMiddleware, compose } from "@reduxjs/toolkit"
import persistState from "redux-localstorage"
// import { compose, createStore } from "redux"
import thunk from 'redux-thunk'
import { cart } from "reducers/cart"
import { user } from "reducers/user"
import { Login } from "pages/Login"
import { Signup } from "pages/Signup"
import { ProfilePage } from "pages/ProfilePage"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Header } from "components/Header"
import { LandingPage } from "pages/LandingPage"
import { ProductPage } from 'pages/ProductPage'
import { ProductDetails } from 'pages/ProductDetails'
import { Footer } from "components/Footer"

// const enhancer = compose(persistState())
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const savetoLocal = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('finalProjectState', serializedState)
  } catch (err) {
    throw 'Could not save to local storage.'
  }
}

const loadFromLocal = () => {
  try {
    const serializedState = localStorage.getItem('finalProjectState')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (err) {
    throw 'Could not load from local storage.'
    return undefined
  }
}

const reducer = combineReducers({
  cart: cart.reducer,
  /* products: products.reducer, */
  user: user.reducer,
})

const persistedState = loadFromLocal()
const store = createStore(reducer, persistedState, enhancer(applyMiddleware(thunk)))
store.subscribe(() => savetoLocal(store.getState()))

// const store = configureStore({ reducer })
// const store = createStore(reducer, enhancer)

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/products" exact>
            <ProductPage />
          </Route>

          <Route path="/products/:productId" >
            <ProductDetails />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/profilepage">
            <ProfilePage />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
