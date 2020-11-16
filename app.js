const express = require("express");
const app = express();
const port = 3000;
const {Client} = require("pg");
const client = new Client({})

app.use(express.json());
app.use('/cart-items', cart);

app.get('/', (req, res) =>{
    res.json({msg: "Hello! Please go to /cart-items to see the cart"})
});

app.listen(port, () => console.log('listening on port:', port));