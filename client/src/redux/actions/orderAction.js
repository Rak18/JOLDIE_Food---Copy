// import axios from "axios";
// import { response } from "express";

// export const placeOrder = (token, getCartSubTotal) => async (dispatch,getState) =>{
//     dispatch({ type: "PLACE_ORDER_REQUEST" });

//     const currentUser = getState().loginUserReducer.currentUser;
//     const cartItems = getState().cartReducer.cartItems;
//     try {
//        const {res} =  await axios.post("/api/orders/placeorder", {
//       token,
//       getCartSubTotal,
//       currentUser,
//       cartItems,
//     });
//     dispatch({ type: "PLACE_ORDER_SUCCESS" });
//     console.log(res);
//     } catch (error) {
//         dispatch({ type: "PLACE_ORDER_FAIL" });
//         console.log(error);
//     }
// };