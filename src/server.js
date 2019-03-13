import express from 'express';
import bodyParser from 'body-parser';
import mongodb from 'mongodb';

const port = 8500;

let app = express();

const mongoUrl =
  'mongodb://ahmadyassin:ahmad12345@ds249372.mlab.com:49372/computer-store';
let computer_store_db;
let ITEMS_COLLECTION;
// let ADMIN_USERS_COLLECTION;
// let CLIENT_USERS_COLLECTION;
// let ORDERS_COLLECTION;

mongodb.MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function(
    err,
    database
) {
    if (err) {
        console.log(err);
    }
    computer_store_db = database.db('computer-store');
    ITEMS_COLLECTION = computer_store_db.collection('items');
    // ADMIN_USERS_COLLECTION = computer_store_db.collection('admin_users');
    // CLIENT_USERS_COLLECTION = computer_store_db.collection('client_users');
    // ORDERS_COLLECTION = computer_store_db.collection('orders');

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