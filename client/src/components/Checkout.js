import React from 'react'
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux"
import { placeOrder } from "../redux/actions/orderAction"

const Checkout = ({getCartSubTotal}) => {

    const dispatch = useDispatch();
    const tokenHandler = (token) => {
        dispatch(placeOrder(token, getCartSubTotal));
        console.log(token);
      };

  return (
   <StripeCheckout
   amount={getCartSubTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51LEHNOSCjXli5kKfwkvyoLzyxXvXRWlqLuJLKknUccEahCrQGIQYJoLJxj5Ze7WoiBQLRLpGTqAcioqGeximvttv00bix3vojZ"
        currency="INR"
        >
     
    <Button>Pay Now</Button>
   </StripeCheckout>
  )
}

export default Checkout