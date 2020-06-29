// requires
const express = require( 'express' );
const router = express.Router();
// uses will go here

// set up routes
router.get( '/', (req, res)=>{
    console.log( 'newshool.route GET' );
    res.send( 'hiss' );
}) // end GET

router.post( '/', (req, res )=>{
    console.log( 'newshool.route POST:', req.body );
    res.send( 'meow' );
}) // end POST
// export
module.exports = router;