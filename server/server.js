// requires
const express = require( 'express' );
app = express();
const bodyParser = require( 'body-parser' );
const newschool = require( './modules/newschool.route' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// set up use for routes AFTER bodyParser
app.use( '/newschool', newschool );
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server up:', port );
})

// oldschool
app.get( '/oldschool', ( req, res )=>{
    console.log( 'oldschool' );
    res.send( 'oldie' );
})