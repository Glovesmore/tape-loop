// External dependencies
var http = require( 'http' ),
    express = require( 'express' ),
    bodyParser = require( 'body-parser' );


// Local variables
var app = express(),
    server = http.createServer( app ),
    router = new express.Router(),
    port = 8888;


/**
 * Initialise
 */
var init = function init() {

  // Setup middleware
  app.use( bodyParser.urlencoded( { extended: true } ) );
  app.use( bodyParser.json() );
  app.use( router );
  app.use( express.static( './public' ) );
  app.use( function( request, response ) {
    response.status( 404 ).send( 'Not found!' );
  } );

  router.get( '/', function( request, response ) {
    response.sendFile( __dirname + '/public/html/index.html' );
  } );

  // Start server
  server.listen( port );

  console.log( 'Tape-loop server running on port ' + port + '!' );

};


// Get the party started
init();


// Exports
module.exports = app;
