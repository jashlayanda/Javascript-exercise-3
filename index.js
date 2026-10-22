
var tweet = prompt("Write your tweet:");

var tweetLength = tweet.length;
var charactersRemaining = 140 - tweetLength;

alert("You have written " + tweetLength + " characters. You have " + charactersRemaining + " characters remaining.");
