const express = require("express");
const app = express();
const port = 3000;

const cartItems = require('./Routes/cart');

app.use(express.json());
app.use('/cart', cartItems);

app.get('/', (req, res) =>{
    res.json({msg: "Hello! Please go to /cart to see the cart"})
});

app.listen(port, () => console.log('listening on port:', port));