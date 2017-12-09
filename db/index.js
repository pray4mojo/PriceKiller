const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
require('dotenv').config();

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`;

mongoose.connect(uri, {
  useMongoClient: true,
  promiseLibrary: require('bluebird')
})
  .then(() => console.log('database connected'))
  .catch(err => {
    console.log(err);
  });

// mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVER}`, {mongoUseClient: true});

// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected to database');
// });

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  favorites: {type: Array,  "default" : []},
  googleId: { type: String },  //depends on OAuth
  sessionID: { type: String }
});

const ProductSchema = new Schema({
  name: { type: String },
  newPrices: {type: Array, "default" : []},
  usedPrices: {type: Array, "default": []}
})


const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);


module.exports.User = User;
module.exports.Product = Product;