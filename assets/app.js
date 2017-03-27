$( document ).ready(function() {

// Adding click event listener to TV Show button
    $("#tvShow-input").on("click", function() {
      // Grabbing and storing the value from the button
      var tvShow = $(this).attr("tvShow-input");

      // Constructing a queryURL using the tv show name
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        tvShow + "&api_key=dc6zaTOxFJmzC&limit=10";

        // Performing an AJAX request with the queryURL
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        // After data comes back from the request
        .done(function(response) {
          console.log(queryURL);
          console.log(response);

          var tvShowArray = [];

      }) //closes function for ajax call

  	}); // closes event listener function for tvshowinput

 }); // closes document.ready function

