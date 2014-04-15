$(document).ready(function() {

$( ".clicky" ).click(function() {
  $( ".clicky" ).each(function() {
    $( this ).toggleClass( "example" );
  });
});


});