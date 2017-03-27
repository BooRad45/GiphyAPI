$(document).ready(function() {

    var gifCount = 0;

    // Adding click event listener to TV Show button
    $("#addtvShow").on("click", function(event) {
        event.preventDefault();
        // Grabbing and storing the value from the field
        var tvShow = $("#tvShow-input").val();
        console.log(tvShow);


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

                //grab data from response and store in variable
               var tvShow = response.data;
               var gifItem = $("<button>");

               // gifItem.attr("id", );
               // gifItem.append(" " + toDoTask);



            }); //closes function for ajax call

    }); // closes event listener function for tvshowinput

}); // closes document.ready function

