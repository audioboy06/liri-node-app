require("dotenv").config();

const keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");


var command = parseFloat(process.argv[2]);
var userInput = parseFloat(process.argv[3]);
var movieName = process.argv[3];
var songName = process.argv[3];

switch(command) {
    case "my-tweets":
        getTweets();
        break;
    case "spotify-this-song":
        getSpotifySong();
        break;
    case "movie-this":
        getMovie();
        break;
    case "do-what-it-says":
        yesSir();
        break;
    default:
        console.log("Not a recognized command");
        break;
}

// function getTweets()
//     var client = new Twitter(keys.twitter);


// function getSpotifySong()
//     var spotify = new Spotify(keys.spotify);


function getMovie()
    
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {

        if (!error && response.statusCode === 200) {
      
          console.log("Title: " + JSON.parse(body).Title);
          console.log("Release Year: " + JSON.parse(body).Year);
          console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
          console.log("Country: " + JSON.parse(body).Country);
          console.log("Language: " + JSON.parse(body).Language);
          console.log("Plot: " + JSON.parse(body).Plot);
          console.log("Actors: " + JSON.parse(body).Actors);

        }
      });
      

// function yesSir()




