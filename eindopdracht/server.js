// https://github.com/thelinmichael/spotify-web-api-node#installation
var http = require("http");
var spotifyWebApi = require('spotify-web-api-node');

// use this for the accesToken
// spotifyApi.setAccessToken('<your_access_token>');

var scopes = ['user-read-private', 'user-read-email'],
  redirectUri = 'http://localhost:8888/callback',
  clientId = '5fe01282e44241328a84e7c5cc169165',
  state = 'some-state-of-my-choice';

var credentials = {
  clientId: '7d6fab8d28f34070993e44f4c7a6d416',
  clientSecret: 'ee97c2c6bc204c8aa2b2bcd818e0aa14',
  redirectUri: 'http://localhost:8888/callback'
};



var spotifyApi = new spotifyWebApi(credentials);

var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);
console.log(authorizeURL);

// The code that's returned as a query parameter to the redirect URI
var code = 'MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN';

// Retrieve an access token and a refresh token
spotifyApi.authorizationCodeGrant(code).then(
  function(data) {
    console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);

    // Set the access token on the API object to use it in later calls
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);
  },
  function(err) {
    console.log('Something went wrong!', err);
  }
);


http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
      response.write("Hello World");
      response.end();
}).listen(8888);
