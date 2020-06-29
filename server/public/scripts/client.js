$( document ).ready( onReady );

function onReady(){
    $.ajax({
        type: 'POST',
        url: '/newschool',
        data: { test: 'thingy' }
    }).then( function( response ){
        console.log( 'back from Get:', response );
    }).catch( function( err ){
        alert( 'problem!' );
        console.log( err );
    })
}