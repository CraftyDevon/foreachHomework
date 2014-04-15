$(document).ready(function() {

	var postContent = ["Dudley Demented", "A Peck of Owls", "The Advance Guard", "Number Twelve Grimmauld Place"];

	  var listItemTemplate = function(data) {
        var markup = "";
        var i;

        for(i = 0; i < data.length; i++) {
          markup += '<div class="harrychapters">' + data[i] + "</div>";
          
        } 

        // console.log(markup);

        return markup;

  };


  $(".harrychapter").append(listItemTemplate(postContent));




});