import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cart } from "reducers/cart";
import { products } from "reducers/products";
import { user } from "reducers/user";
import { Button } from "components/Button";

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer,
  user: user.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div>Find me in src/app.js! </div>
      <Button />
    </Provider>
  );
};
