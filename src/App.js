import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import persistState from "redux-localstorage"
import { compose, createStore } from "redux"
import { cart } from "reducers/cart"
import { products } from "reducers/products"
import { user } from "reducers/user"
import { Login } from "pages/Login"
import { Signup } from "pages/Signup"
import { ProfilePage } from "pages/ProfilePage"
import { BrowserRouter, Switch, Route } from "react-router-dom" // added
import { Header } from "components/Header"
import { LandingPage } from "pages/LandingPage"
import { ProductPage } from 'pages/ProductPage'
import { Footer } from "components/Footer"

const reducer = combineReducers({
  cart: cart.reducer,
  /* products: products.reducer, */
  user: user.reducer,
})

//const enhancer = compose(persistState())

const store = configureStore({ reducer })
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
