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
  favorites: {type: Array,  "default" : []},//Save function must include: `user.markModified('favorites');`
  googleId: { type: String },  //depends on OAuth
  sessionID: { type: String }
});
//favoriteObject: {
//   queryString: String,
//   categoryId: Number,
//   favoriteIsCurrent: boolean
// }


//Historical Data
const CronJobSchema = new Schema({
  queryString: { type: String },
  categoryId: { type: Number },
  priceHistory: { type: Array, "default": [] } //Save function must include: `cronJob.markModified('priceHistory');`
});
//priceHistoryObject: {
//   createdAt: timestamp,
//   avgLikeNewPrice: Number,
//   avgUsedPrice: Number,
//   avgAccPrice: Number,
// }

const ProductAuctionsSchema = new Schema({
  queryString: { type: String },
  categoryId: { type: Number },
  auctions: Mixed //Save function must include: `productAuctions.markModified('auctions');`
});
//auctionsObjct: {
//   itemId1: auctionObject from ebay,
//   itemId2: auctionObject from ebay,
//   ...itemIdn: auctionObject from ebay
// }

const User = mongoose.model('User', UserSchema);
const CronJob = mongoose.model('CronJob', CronJobSchema);
const ProductAuctions = mongoose.model('ProductAuctions', ProductAuctionsSchema);


module.exports.User = User;
module.exports.Product = Product;