require('dotenv').config()
//must export stuff from this file to liri

// console.log(process.env.CONSUMER_KEY);

exports.twitterKeys = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
}

// console.log(exports.twitterKeys);

//---------------------------------------------------

