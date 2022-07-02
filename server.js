require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 6000;
const productRoutes = require('./routes/productRoutes');
const auth = require('./routes/auth');
const errorHandler = require("./middleware/error");


//mongoDB connected
connectDB();

//middleware
app.use(express.json());

//route

// app.use('/api/products', productRoutes)
app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/private', require('./routes/private'))
app.use('/api/orders', require('./routes/orderRoutes'))
//Error Handler should be last piece of middleware

app.use(errorHandler);

app.get("/", (req,res) => res.status(200).send("Server Connnected"));


app.listen(PORT, () => console.log(`listening to http://localhost:${6000}`));

