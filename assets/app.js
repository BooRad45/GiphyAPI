$(document).ready(function() {

    var gifCount = 0;

    // Adding click event listener to TV Show button
    $("#addtvShow").on("click", function(event) {
        event.preventDefault();
        // Grabbing and storing the value from the field
        var tvShow = $("#tvShow-input").val().trim();
        console.log(tvShow);

        var gifClose = $("<button>");

        gifClose.attr("show-name", tvShow);
        gifClose.attr("type", "button");
        gifClose.attr("type", "submit");
        gifClose.addClass("btn btn-primary");
        gifClose.text(tvShow);

        $("#tvShows").append(gifClose);

        //empty input field
        $("#tvShow-input").val("");

        // Add to the gifCount
        gifCount++;



        // Adding click event listen listener to all buttons
        $("button").on("click", function() {
            // Grabbing and storing the data-count property from button
            var tvShowGIF = tvShow;
            console.log(tvShowGIF);

            // Constructing a queryURL using the animal name
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                tvShowGIF + "&api_key=dc6zaTOxFJmzC&limit=10";

            // Performing an AJAX request with the queryURL
            $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                // After data comes back from the request
                .done(function(response) {
                    console.log(queryURL);

                    console.log(response);
                    // storing the data from the AJAX request in the results variable
                    var results = response.data;

                    // Looping through each result item
                    for (var i = 0; i < results.length; i++) {

                        // Creating and storing a div tag
                        var tvShowDiv = $("<div>");

                        // Creating a paragraph tag with the result item's rating
                        var p = $("<p>").text("Rating: " + results[i].rating);

                        // Creating and storing an image tag
                        var tvShowImg = $("<img>").addClass("gif");

                        // Setting the src attribute of the image to a property pulled off the result item
                        tvShowImg.attr("src", results[i].images.fixed_height.url);
                        tvShowImg.attr("data-animate", results[i].images.fixed_height.url);
                        tvShowImg.attr("data-still", results[i].images.fixed_height_still.url);
                        tvShowImg.attr("data-state", "animate");



                        // Appending the paragraph and image tag 
                        tvShowDiv.append(p);
                        tvShowDiv.append(tvShowImg);

                        // Prepending the div to the HTML page in the "#gifs-appear-here" div
                        $("#gifs-appear-here").prepend(tvShowDiv);
                    }


                    $(".gif").on("click", function() {
                        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                        var state = $(this).attr("data-state");
                        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                        // Then, set the image's data-state to animate
                        // Else set src to the data-still value
                        if (state === "animate") {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        } else {
                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state", "animate");
                        }
                    });
                });
        });
    });

});