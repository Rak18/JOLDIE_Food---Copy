const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51LEHNOSCjXli5kKfB5xwN9oWwnLK5HgRWbqFE4u4so8ObiddyU7gzwXWjB88cnztYpctqOOrh5RTaafUPZqEjALw008Sm3OHmM')


router.post('/placeorder', async (req,res) => {
    const { token,
              getCartSubTotal,
              currentUser,
              cartItems,} = req.body
              try {
                const customer = await stripe.customers.create({
                    email:token.email,
                    source:token.d
                })
                const payment = await stripe.charges.create({
                    amount:subTotal * 100,
                    currency: 'inr',
                    customer:customer.id,
                    receipt_email:token.email
                }, {
                    idempotencyKey: uuidv4()
                })
                if(payment){
                    res.send('Payment Success')
                }else{
                    res.send('Payment Failed')
                }

              } catch (error) {
                res.status(400).json({
                    message:"Something went wrong"
                    // error: error.stack,
                })
                
              }
})

module.exports = router