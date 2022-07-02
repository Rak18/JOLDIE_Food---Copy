import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
// import { registerUserReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducers";
import { registerUserReducer, loginUserReducer } from "./reducers/userReducer";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";
// 
import { placeOrderReducer } from "./reducers/orderReducer"

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  placeOrderReducer: placeOrderReducer,
  registerUserReducer :  registerUserReducer ,
  loginUserReducer :  loginUserReducer 
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

 const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;