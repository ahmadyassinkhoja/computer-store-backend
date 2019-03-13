import express from 'express';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';

import { getTodayDate, getTodayTime, getTodayDateTime } from './scripts'

const port = 8500;

let app = express();

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
        // phone_number: user.phone_number,
        // user_name: user.name,
        // user_address: user.address,
    }

    ORDERS_COLLECTION.insertOne(order, function (err, result) {
        console.log(result)
    })
})