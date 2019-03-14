import express from 'express';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';

import { getTodayDate, getTodayTime, getTodayDateTime } from './scripts'

const port = 8500;

let app = express();

// getting id
var ObjectID = mongodb.ObjectID;

const mongoUrl =
  'mongodb://ahmadyassin:ahmad12345@ds249372.mlab.com:49372/computer-store';
let computer_store_db;
let ITEMS_COLLECTION;
let ORDERS_COLLECTION;
// let CLIENT_USERS_COLLECTION;

mongodb.MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function(
    err,
    database
) {
    if (err) {
        console.log(err);
    }
    computer_store_db = database.db('computer-store');
    ITEMS_COLLECTION = computer_store_db.collection('items');
    ORDERS_COLLECTION = computer_store_db.collection('orders');
    // CLIENT_USERS_COLLECTION = computer_store_db.collection('client_users');

    console.log('🌀  Database connection ready 💥 ⚡');

    /*eslint no-undef: 0*/
    app.listen(process.env.PORT || port, err => {
        if (err) {
            console.log(err);
        }
        console.log(`🙌  Server is Listining on port ${port}🔥  🚀`);
    });
});

// * For google auth and allowing passing headers from server to app and vice verca
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With'
    );
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Welcome to Our Computer Store Back-end');
});

app.get('/items', (req, res) => {
    ITEMS_COLLECTION.find({}).toArray( (err, items) => {
        res.send(items)
    })
});

app.get('/orders', (req, res) => {
    ORDERS_COLLECTION.find({}).toArray( (err, orders) => {
        res.send(orders)
    })
});

app.post('/addOrder', (req, res) => {
    const {purchasedProducts, total_price, total_quantity } = req.body;
    
    console.log(purchasedProducts, total_price, total_quantity)
    const order = {
        products: purchasedProducts,
        total_price: total_price,
        total_quantity: total_quantity,
        date: getTodayDate(),
        time: getTodayTime(),
        created_at: getTodayDateTime(),
    }

    ORDERS_COLLECTION.insertOne(order, function (err, result) {
        res.send(result)
    })
})

app.post('/addItem', (req, res) => { 
    const item = req.body

    ITEMS_COLLECTION.insertOne(item, function (err, result) {
        res.send(result)
    })
})

app.put('/editItem/:id', (req, res) => {
    const myQuery =  { _id: ObjectID(req.params.id) }

    const item = {
        'name': req.body.name,
        'price': req.body.price,
        'model_number': req.body.model_number,
        'color': req.body.color,
        'processor': req.body.processor,
        'ram': req.body.ram,
        'memory': req.body.memory,
        'vga': req.body.vga,
        'operating_system': req.body.operating_system,
        'brand': req.body.brand,
        'category': req.body.category,
        'picture': req.body.picture,
        'quantity': 0,
    }

    const newValue = {$set: item}
    ITEMS_COLLECTION.findOneAndUpdate( myQuery, newValue )

    res.send('Item Updated Successfully')
})

app.delete('/removeItem/:id', (req, res) => {
    ITEMS_COLLECTION.remove( { _id: ObjectID(req.params.id) } )

    res.send('Item Removed Successfully')
})