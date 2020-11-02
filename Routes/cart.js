const express = require("express");

let cart = express.Router();

let cartItems = [
    {
        id: 1,
        product: "Adidas Harden 4",
        price: 150,
        quantity: 2
    },
    {
        id: 2,
        product: "Jordan 8",
        price: 200,
        quantity: 1
    },
    {
        id: 3,
        product: "Nike LeBron 15",
        price: 150,
        quantity: 3
    },
];

cart.get("/", (req, res) =>{
    console.log('body', req.body)
    res.json({
        cart: cartItems,
        cart_size: cartItems.length
    });
});

cart.get("/:id", (req, res) =>{
    const cart ={
            cart: cartItems,
        cart_size: cartItems[req.params.id - 1]
    };
    console.log('id', req.params.id);
    });

    cart.post("/", (req, res) =>{
        console.log('req.body', req.body);
        cartItems.push(req.body);
        res.json({
            msg: 'Added new item to the cart',
            cartItems: cartItems,
            product: req.body
        })
    });

    cart.put('/:id', (req,res) => {
        let requestId = request.params.id;

        let item = cartItems.filter(item =>{
            return item.id == requestId;
        })[0];

        const index = cartItems.indexOf(item);
        const keys = object.keys(req.body);

        keys.forEach(key =>{
            item[key] = req.body[key];
        });

       cartItems[index] = item;

       res.json(cartItems[index]);
    });

    cart.delete('/:id', (req,res) => {
        cartItems.splice(req.body, 1);
        res.json({
            msg: 'Removed item from the cart',
            cartItems: cartItems,
            item_removed: req.body
    });
});

module.exports = cartItems;