//welcome user to my app
console.log("welcome to linh liri node app");

// node argv for command line 
var argv = process.argv;
// console.log(argv);
// console.log(argv[2]);


//  grab the data from key.js
var objOfkey = require("./key.js");
// store the key into a variable
var twitterAPIKeys = objOfkey.twitterKeys;
 // console.log(twitterAPIKeys.consumer_key);

// twitter 
// note: will show the last 20 tweets 
//1st- retrieve the data -- by making a request to twitter node packages 
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: twitterAPIKeys.consumer_key,
  consumer_secret: twitterAPIKeys.consumer_secret,
  access_token_key: twitterAPIKeys.access_token_key,
  access_token_secret: twitterAPIKeys.access_token_secret
});
 
 
var getTwitterTweets = function(){
	// console.log(client);
var params = {screen_name: 'Snack_LinhSnack'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

    // console.log(tweets);
    // console.log(tweets.length);
    for (var i = 0; i < tweets.length; i++) {
    	// console.log(i);
    	if (i===20) {
    		break;
    	}
    	// console.log(tweets[i]);
    	console.log(tweets[i]["created_at"]);
    	console.log(tweets[i]["text"]);

    
    }
  }
});
}

//---------------------------------
//request spotify npm
var spotify = require('spotify');
console.log(spotify);
var getSpotifySong = function(){
	//access
}

//--------------------------
//request IMDB npm
var IMDB = require('imdb-api');
var getIMBDMovie = function(){
	//access
}


// twitter must recognize my-tweet commands 

switch(argv[2]) {
    case "my-tweets":
        console.log("Pulling up Tweets");
        getTwitterTweets();
        break;
    case "spotify-this-song":
        console.log("Pulling up Song info");
        break;
    case "movie-this":
        console.log("Pulling up Movie info");
        break;
    case "do-what-it-says":
        console.log("Pulling up anything you said");
        break;
    
    default:
        console.log("Please pick a proper options");
}




