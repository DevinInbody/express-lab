const express = require("express");
const {Client} = require("pg");
const client = new Client({
host: "localhost",
database: "ExpressShopDB",
port: 5400,
user: "docker",
password: "docker",
});

client
.connect()
.then(() => console.log("Connected to DB"))
.catch((err) => console.err("Failed to connect to DB", err.stack))



let cart = express.Router();

getTable = (req, res) =>{
    client.query('SELECT * FROM shopping_cart', (err, data) =>{
        res.json({data: data.rows
        })
    })};

app.get('/', (req, res) =>{
   getTable(req, res)
        });

cart.get("/:id", (req, res) =>{
    client.query('SELECT * FROM shopping_cart', (err, data) =>{
    res.json({
        data: data.rows.id
    })
    console.log('id', data.rows.id);
    });

    cart.post("/", (req, res) =>{
 client.query("insert into shopping_cart (product, price, quantity) values ($1::text)", [req.body]).then =x 
 getTable(req,res)
    });

    cart.put('/:id', (req,res) => {
            });

    cart.delete('/:id', (req,res) => {
        client.query("delete from shopping_cart where id=$1::int", [req.params.id]).then(() =>{
            getTable(req.res)
        })
    });
});

module.exports = cart;