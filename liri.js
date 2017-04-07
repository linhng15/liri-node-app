//welcome user to my app
console.log("welcome to linh liri node app");

// node argv for command line 
var argv = process.argv;
// console.log(argv);
// console.log(argv[2]);




// ---------twitter -----------------------------
 
var getTwitterTweets = function(){
//  grab the data from key.js
var objOfkey = require("./key.js");
// store the key into a variable
var twitterAPIKeys = objOfkey.twitterKeys;
 // console.log(twitterAPIKeys.consumer_key);
 // note: will show the last 20 tweets 
 //retrieve the data -- by making a request to twitter node packages 
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: twitterAPIKeys.consumer_key,
  consumer_secret: twitterAPIKeys.consumer_secret,
  access_token_key: twitterAPIKeys.access_token_key,
  access_token_secret: twitterAPIKeys.access_token_secret
});
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
    	console.log(i+1);
    	console.log(tweets[i]["created_at"]);
    	console.log(tweets[i]["text"]);
    	console.log('-----------------------------------');
   
    }
  }
});
}

//---------------------------------
//request spotify npm
var Spotify = require('spotify');
var getSpotifySong = function(){
	//access
	var querySong = process.argv[3];
    Spotify.search({ type: 'track', query: querySong }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
      var songResults = data.tracks.items;
      console.log(songResults);
      // Do something with 'data'
      for (var i = 0; i < songResults.length; i++){
        console.log(i+1);
        console.log('artist(s): ' + songResults[i].artists[0].name);
        console.log('song name: ' + songResults[i].name);
        console.log('preview song: ' + songResults[i].preview_url);
        console.log('album: ' + songResults[i].album.name);
        console.log('-----------------------------------');
      }
  });
}

//--------------------------
//request npm
var getIMBDMovie = function(){
	//access
var request = require("request");
// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = ""; 
// console.log(movieName);
// ex. movie = guardians of the galaxy
// http://www.omdbapi.com/?t=guardians+of+the+galaxy
// use for loop to make movies name query 
// make movieName = guardians+of+the+galaxy
for (var i = 3; i < argv.length; i++) {
	// console.log(i);
	// console.log("current word is... " + argv[i]);

	console.log("movie name is now... " + movieName);
	var currentWord = argv[i];
		// if you have a movie that's one word or first word 
	if (i === 2) {
		// 	make movie name into one word 
		movieName += currentWord 
		// else movie with more than one word
	} else { 
		// 	add plus sign & current word 
		movieName += "+" + currentWord 
		// movieName = movieName + "+" + currentWord 
	}

}
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {
	if(!error && response.statusCode === 200) {
		console.log("the movie year " + JSON.parse(body).Year)
	}
})
}


// twitter must recognize my-tweet commands 

switch(argv[2]) {
    case "my-tweets":
        console.log("Pulling up Tweets");
        getTwitterTweets();
        break;
    case "spotify-this-song":
        console.log("Pulling up Song info");
        getSpotifySong();
        break;
    case "movie-this":
        console.log("Pulling up Movie info");
        getIMBDMovie();
        break;
    case "do-what-it-says":
        console.log("Pulling up anything you said");
        break;
    
    default:
        console.log("Please pick a proper options");
}




