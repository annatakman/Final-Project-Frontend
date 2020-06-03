import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cart } from "reducers/cart";
import { products } from "reducers/products";
import { user } from "reducers/user";
import { Login } from "components/Login";
import { Signup } from "components/Signup";
import { Profilpage } from "components/Profilpage";
import { BrowserRouter, Switch, Route } from "react-router-dom"; // added

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
  user: user.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <div>Första sidan </div>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/profilpage">
            <Profilpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
