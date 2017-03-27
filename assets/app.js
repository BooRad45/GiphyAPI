$(document).ready(function() {

    var gifCount = 0;

    // Adding click event listener to TV Show button
    $("#addtvShow").on("click", function(event) {
        event.preventDefault();
        // Grabbing and storing the value from the field
        var tvShow = $("#tvShow-input").val().trim();
        console.log(tvShow);

               var gifClose = $("<button>");

               gifClose.attr("data-count", gifCount);
               gifClose.attr("type", "button");
               gifClose.attr("type", "submit");
               gifClose.addClass("btn btn-primary");
               gifClose.text(tvShow);

               $("#tvShows").append(gifClose);

            //empty input field
             $("#tvShow-input").val("");

              // Add to the gifCount
              gifCount++;


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

                
           
       });
    }); // closes event listener function for tvshowinput

}); // closes document.ready function

